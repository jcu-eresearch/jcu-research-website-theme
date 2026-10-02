# RWT logo assets

The approved mark combines tropical leaves and RWT lettering. Colours:

- Deep green: `#354F52`
- Sage: `#C3D5C7`
- Quandong red: `#C83B35`
- Mono: deep green `#354F52`
- Reverse mono: white `#FFFFFF`

Every role has six PNG versions: `colour`, `mono`, and `reverse-mono`, each
with `transparent` or `white` backgrounds. Filenames use
`ROLE-VARIANT-BACKGROUND.png`.

| Role | PNG dimensions | Configured use |
| --- | --- | --- |
| `app` | 512 × 512 | Project logo, Apple touch icon; reverse mono in the title bar |
| `favicon` | 64 × 64 | Browser favicon |
| `hero` | 1024 × 1024 | Homepage hero |

The six `logo-VARIANT-BACKGROUND.svg` files are scalable vector masters.
Use these for additional export sizes. All exports share the same outlines and
framing. Transparent versions also have transparent letter counters and leaf
veins. White-background versions are fully opaque. Reverse mono on white is
intentionally white-on-white and invisible; use reverse mono with transparency
on a dark background.

The site selects transparent colour for `project_logo`, `app_icon`, and
`favicon`, and transparent reverse mono for `header_logo`. The homepage hero
uses transparent colour with `image_fit: contain` so the logo is not cropped.

## Production notes

The design and initial colour/transparency explorations used the built-in
imagegen tool. Production SVG masters were traced from the approved red RWT
reference and exported as PNGs, preserving consistent outlines across variants.
The generated transparency explorations were not used as final assets because
their edges were uneven.

Image generation brief: preserve the RWT lettering and three tropical leaves;
use deep green, sage, and quandong red for colour, deep green for mono, and
white for reverse mono; provide transparent and white backgrounds; retain all
negative spaces and avoid additional elements, gradients, textures, and shadows.
