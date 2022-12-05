const importAll = (context: __WebpackModuleApi.RequireContext) =>
  context
    .keys()
    .filter((key) => !key.includes('./')) // remove duplicates
    .map(context)
    .reverse() as string[];

export const imageSources = importAll(require.context('../images', false, /\.(jpg)$/));
