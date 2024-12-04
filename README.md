For Skylar and Felix

### How to optimize images

- Using https://github.com/343dev/optimizt

```
# recursively create WebP versions for images in current directory
optimizt --webp .

# recursively optimize JPEG files in the current directory
find . -iname \*.jpg -exec optimizt {} +
```
