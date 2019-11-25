declare module 'svg-parser' {
  export interface HASTElementProps {
    type: string
    tagName?: string
    value?: string
    properties?: {
      [details: string]: string
    }
    children?: HASTElementProps[]
  }
  function parse(c: string): HASTElementProps
}
