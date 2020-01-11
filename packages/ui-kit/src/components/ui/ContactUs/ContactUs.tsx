import * as _ from 'lodash'
import * as React from 'react'

const ContactUsButton = React.lazy(() => import('./ContactUsButton'))

export interface ContactUsProps {
  title: React.ReactNode | string
}

// Make user click a button to show email adderss via lazy loading
export const ContactUs: React.FunctionComponent<ContactUsProps> = props => {
  const { title } = props

  const isSSR = typeof window === 'undefined'
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>loading...</div>}>
          <ContactUsButton title={title} />
        </React.Suspense>
      )}
    </>
  )
}
