# Run with: bundle exec ruby test/image_shapes_test.rb
require "minitest/autorun"
require "liquid"

class ImageShapesTest < Minitest::Test
  def attributes(block = {}, image = {}, ratio = "4 / 3")
    source = File.read(File.expand_path("../_includes/image-attributes.html", __dir__))
    Liquid::Template.parse(source).render!("include" => {"block" => block, "image" => image, "default_ratio" => ratio})
  end

  def test_existing_blocks_have_no_new_attributes
    assert_equal "", attributes
  end

  def test_named_shapes
    {"landscape" => "4 / 3", "wide" => "16 / 9", "square" => "1 / 1", "portrait" => "3 / 4", "original" => "auto"}.each do |shape, ratio|
      assert_includes attributes({"image_shape" => shape}), "--image-shape-ratio: #{ratio};"
    end
  end

  def test_individual_card_overrides_block_shape_fit_and_crop
    result = attributes({"image_shape" => "square", "image_fit" => "cover", "image_crop_position" => "center"}, {"image_shape" => "portrait", "image_fit" => "contain", "image_crop_position" => "top"})
    assert_includes result, "--image-shape-ratio: 3 / 4;"
    assert_includes result, "--image-fit: contain;"
    assert_includes result, "--image-crop-position: top;"
  end

  def test_card_inherits_block_settings
    result = attributes({"image_shape" => "square", "image_fit" => "contain", "image_crop_position" => "top"}, {"title" => "Person"})
    assert_includes result, "--image-shape-ratio: 1 / 1;"
    assert_includes result, "--image-fit: contain;"
    assert_includes result, "--image-crop-position: top;"
  end

  def test_fit_only_preserves_the_callers_default_ratio
    assert_includes attributes({"image_fit" => "contain"}, {}, "auto"), "--image-shape-ratio: auto;"
    assert_includes attributes({"image_fit" => "contain"}, {}, "16 / 9"), "--image-shape-ratio: 16 / 9;"
  end

  def test_invalid_values_fall_back_without_inserting_arbitrary_css
    result = attributes({"image_shape" => "broken; color: red", "image_fit" => "broken", "image_crop_position" => "broken"}, {}, "16 / 9")
    assert_includes result, "--image-shape-ratio: 16 / 9;"
    assert_includes result, "--image-fit: cover;"
    assert_includes result, "--image-crop-position: center;"
    refute_includes result, "broken"
  end

  def test_all_named_crop_positions
    %w[center top bottom left right].each do |position|
      assert_includes attributes({"image_crop_position" => position}), "--image-crop-position: #{position};"
    end
  end

  def test_settings_do_not_leak_between_images
    source = File.read(File.expand_path("../_includes/image-attributes.html", __dir__))
    template = Liquid::Template.parse("{% for params in examples %}{% assign include = params %}" + source + "{% endfor %}")
    result = template.render!("examples" => [{"block" => {"image_shape" => "square"}, "default_ratio" => "4 / 3"}, {"block" => {}}])
    assert_equal attributes({"image_shape" => "square"}), result
    assert_equal "", attributes({}, {"title" => "No framing options"})
  end
end
