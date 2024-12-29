const allImages = Object.entries(import.meta.glob('../images/**/*.webp', { eager: true })).map(
  ([path, module]) => ({
    path,
    src: (module as { default: string }).default,
  })
);

export const imageSources = allImages
  .filter(({ src }) =>
    import.meta.env.VITE_SITE_NAME === 'skylar' ? src.includes('skylar') : src.includes('felix')
  )
  .map(({ src }) => src);
