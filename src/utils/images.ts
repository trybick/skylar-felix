const allImages = Object.entries(
  import.meta.glob('../images/**/*.webp', { eager: true })
).map(([path, module]) => ({
  path,
  src: (module as { default: string }).default,
}));

export const imageSources = allImages
  .filter(({ path }) =>
    import.meta.env.VITE_SITE_NAME === 'skylar'
      ? path.includes('/skylar/')
      : path.includes('/felix/')
  )
  .map(({ src }) => src);
