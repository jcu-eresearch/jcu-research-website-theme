# Run with: bundle exec ruby test/landing_card_columns_test.rb
require "minitest/autorun"
require "jekyll"
require "nokogiri"
require "tmpdir"

class LandingCardColumnsTest < Minitest::Test
  def setup
    @destination = Dir.mktmpdir("landing-card-columns")
    @site = Jekyll::Site.new(Jekyll.configuration(
      "source" => File.expand_path("..", __dir__),
      "destination" => @destination,
      "quiet" => true
    ))
    @site.read
  end

  def teardown
    FileUtils.remove_entry(@destination)
  end

  def render_columns(columns: nil, default: nil)
    @site.config["theme_settings"]["page_card_columns"] = default
    section = {"title" => "Books", "cards" => [
      {"title" => "Illustrated", "image" => "/cover.jpg", "image_alt" => "Book cover", "image_shape" => "original", "image_fit" => "contain", "text" => "**Description**", "url" => "/book/", "link_text" => "Read book"},
      {"title" => "Text only", "text" => "Description"}
    ]}
    section["columns"] = columns unless columns.nil?
    page = Jekyll::PageWithoutAFile.new(@site, @site.source, "", "columns.html")
    page.data["layout"] = nil
    page.data["card_section"] = section
    page.content = '{% include landing-section.html section=page.card_section %}'
    page.render(@site.layouts, @site.site_payload)
    Nokogiri::HTML.fragment(page.output)
  end

  def test_default_and_site_setting
    assert_equal "--landing-card-columns: 3;", render_columns.at_css(".landing-card-grid")["style"]
    assert_equal "--landing-card-columns: 2;", render_columns(default: 2).at_css(".landing-card-grid")["style"]
  end

  def test_explicit_columns_override_site_setting
    [1, 2, 3, 4, 6].each do |columns|
      grid = render_columns(columns: columns, default: 5).at_css(".landing-card-grid")
      assert_equal "--landing-card-columns: #{columns};", grid["style"]
      assert_equal columns == 1, grid["class"].split.include?("landing-card-grid--single")
    end
  end

  def test_column_values_follow_standard_card_normalization
    {"2" => 2, 0 => 1, -2 => 1, "invalid; color: red" => 1}.each do |value, expected|
      assert_equal "--landing-card-columns: #{expected};", render_columns(columns: value).at_css(".landing-card-grid")["style"]
    end
  end

  def test_single_column_retains_card_content_and_image_options
    result = render_columns(columns: 1)
    assert_equal 2, result.css(".landing-card").length
    assert_equal 1, result.css(".landing-card--no-image").length
    assert_equal "Text only", result.at_css(".landing-card--no-image h3").text
    assert_equal "Book cover", result.at_css("img")["alt"]
    assert_equal "original", result.at_css("img")["data-image-shape"]
    assert_includes result.at_css("img")["style"], "--image-fit: contain;"
    assert_equal "Description", result.at_css("strong").text
    assert_equal "Read book", result.at_css(".landing-card-body a").text
    assert_match %r{/book/$}, result.at_css(".landing-card-body a")["href"]
  end
end
