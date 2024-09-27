export const idFromString = (title: string): string =>
  title
    .trim()
    .toLowerCase()
    .replaceAll(/[^\s\w]/g, "")
    .replace(/\s/g, "-");
