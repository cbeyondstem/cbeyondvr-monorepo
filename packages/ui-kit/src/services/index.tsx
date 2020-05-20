import {
  makeInjector,
  DependencyInjector,
  useInjectorHook,
  InjectionToken,
  useObservable,
} from '@mindspace-io/react'

import { Observable } from 'rxjs'
import { Query } from '../types/gatsby-graphql-types'

import { SvgProps } from '../components/content/AllSvg'
import { AllSvgClass, SvgTitleByPath, SvgByPath } from './allSvg'
import { SvgHastClass } from './svgHast'

// const API_KEY = new InjectionToken<any>('SomeAPIKey')
export const AllSvgToken = new InjectionToken<any>('AllSvgToken')
export const SvgHastToken = new InjectionToken<any>('SvgHastToken')

const injector: DependencyInjector = makeInjector([
  // { provide: API_KEY, useValue: '123456' },
  { provide: AllSvgToken, useClass: AllSvgClass },
  { provide: SvgHastToken, useClass: SvgHastClass },
])

// export function useDI(token: any) {
//   return useInjectorHook(token, injector)
// }

export type UseAllSvgResponse = [
  SvgByPath,
  (query: Query, titles: SvgTitleByPath) => void
]
export function useAllSvgService(): UseAllSvgResponse {
  const [service] = useInjectorHook(AllSvgToken, injector)
  const [svgByPath] = useObservable<SvgByPath>(service.svgByPath$)
  const setQueryResult = (query: Query, titles: SvgTitleByPath) =>
    service.setQuery(query, titles)
  return [svgByPath, setQueryResult]
}

export type UseSvgHastResponse = [
  // (svgp: SvgProps) => Observable<React.ReactNode>,
  React.ReactNode,
  () => void
]
export function useHtmlAST(svgp: SvgProps): UseSvgHastResponse {
  const [service] = useInjectorHook(SvgHastToken, injector)
  const fetch = () => service.fetch(svgp)
  return [service.useHtmlAST(svgp), fetch]
}
