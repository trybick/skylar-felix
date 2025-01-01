## For Skylar and Felix

[![Netlify Status](https://api.netlify.com/api/v1/badges/dd3b9480-bb8f-4443-99da-78027b43065e/deploy-status)](https://app.netlify.com/sites/skylar/deploys)
[![Netlify Status](https://api.netlify.com/api/v1/badges/02fe2252-6988-4cad-bdb9-cd1351e0643e/deploy-status)](https://app.netlify.com/sites/felixr/deploys)

Skylar: [skylar.netlify.app](skylar.netlify.app)

Felix: [felix-life.netlify.app](https://felix-life.netlify.app)

## Local Development

### How to run locally

```bash
npm install

# choose one
npm run start-skylar
npm run start-felix
```

### How to optimize images

Using https://github.com/343dev/optimizt

```
# recursively create WebP versions for images in current directory
optimizt --webp .

# recursively optimize JPEG files in the current directory
find . -iname \*.jpg -exec optimizt {} +
```
