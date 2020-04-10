import * as _ from 'lodash'
import * as React from 'react'

const VisitUsButton = React.lazy(() => import('./VisitUsButton'))

export interface VisitUsProps {
  title: React.ReactNode | string
}

// Make user click a button to show email adderss via lazy loading
export const VisitUs: React.FunctionComponent<VisitUsProps> = props => {
  const { title } = props

  const isSSR = typeof window === 'undefined'
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>loading...</div>}>
          <VisitUsButton title={title} />
        </React.Suspense>
      )}
    </>
  )
}
