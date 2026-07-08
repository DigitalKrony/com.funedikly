declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
