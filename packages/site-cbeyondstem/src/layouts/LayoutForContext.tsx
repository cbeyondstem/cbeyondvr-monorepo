import * as React from "react";

import { SiteConfig } from "../components/SiteConfig";
import { Authentication } from "../components/Authentication";
import { MyGeolocation } from "../components/MyGeolocation";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "../store";

interface LayoutForContextProps{
  children: React.ReactNode
  location: {
    pathname: string
  }
}
// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/

export const LayoutForContext: React.FunctionComponent<LayoutForContextProps> = 
  ({children}) => {
   return (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SiteConfig.Provider>
            <Authentication.Provider>
              <MyGeolocation.Provider>
                {children}
              </MyGeolocation.Provider>
            </Authentication.Provider>
          </SiteConfig.Provider>
        </PersistGate>
      </ReduxProvider>
    )
  }