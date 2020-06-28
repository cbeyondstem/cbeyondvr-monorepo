# @cbeyond/site-starter

starter for a cbeyond gatsby static website, written in both javascript and typescript, using material-ui, and storybook/jest for component development.

Also, this starter allows to easily leverage from:

- **@creative/material-kit** for quick UI design with professional look-and-feel
- **@cbeyond/mdx-kit** for adding blog or stories capabilties to the site

## Look-and-Feel customisation

### site config

update gatsby-config site object with your site name, description, etc.

### typeface

Default typeface is Roboto. You may customise as described below:

1. update typeface dependencies - our default is Roboto.

```
yarn remove typeface-roboto
yarn add typeface-<my site chosen typeface>
```

2. then update gatsby-brower.js

```
import 'typeface-roboto'
```

### general theme

update ./src/layouts/theme.js and optionally ./src/layouts/TopLayout.js

### view-specific theme

update ./src/assets/jss

### layout

update ./src/layouts/Layout.tsx to define the Navigation bar (top / side and responsiveness), the header and the footer.
