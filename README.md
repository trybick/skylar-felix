## For Skylar and Felix

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
