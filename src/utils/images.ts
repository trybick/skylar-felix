const importAll = (context: __WebpackModuleApi.RequireContext) =>
  context
    .keys()
    .filter((key) => !key.includes('./')) // remove duplicates
    .map(context)
    .reverse() as string[];

export const allImages = importAll(require.context('../images', true, /\.(jpg)$/));

export const imageSources = allImages.filter((src) => {
  const isSkylar = process.env.REACT_APP_SITE_NAME === 'skylar';
  return isSkylar ? src.includes('skylar') : src.includes('felix');
});
