declare module '*.svg' {
  const ReactComponent: SVGType;
  export default ReactComponent;
}

declare module '*.svg?url' {
  /**
   * Webpack asset loader. May export a path or a data uri */
  const url = string;
  export default url;
}

declare module '*.svg?rc' {
  /**
   * React Component SVG. */
  const ReactComponent: SVGType;
  export default ReactComponent;
}

// https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
type ValueOf<T> = T[keyof T];

type OptionsWithDefault<U extends string | number | symbol, V> = Record<
  U,
  V
> & { default: V };

type SVGType = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

type JSONType =
  | null
  | string
  | number
  | { [key: string]: JSONType }
  | Array<JSONType>;
