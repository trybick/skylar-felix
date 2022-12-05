const importAll = (context: any) =>
  context
    .keys()
    .filter((key: string) => !key.includes('./')) // remove duplicates
    .map(context)
    .reverse();

// @ts-ignore
export const imageSources = importAll(require.context('../images', false, /\.(jpg)$/));
