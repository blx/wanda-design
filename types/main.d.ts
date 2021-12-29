/* eslint-disable no-undef */
/**
 * Default CSS definition for typescript
 */

 declare module '*.svg' {
  const svgUrl: string
  const svgComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    /* eslint-disable @typescript-eslint/naming-convention */
    CMS_ENDPOINT: string;
    CMS_SIGNATURE: string;
    NEXT_PUBLIC_DOMAIN: string;
    NEXT_PUBLIC_ALGOLIA_API_KEY: string;
  }
}

type PropsWithClass = {
  style?: Record<string, any>;
  className?: string;
}
