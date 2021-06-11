import React from "react"
import { Route } from "react-router-dom"

import { DropList } from "./drop/DropList"
import { DropProvider } from "./drop/DropProvider"
export const ApplicationViews = () => {
    return (
        <>
          
              <DropProvider>
                  <Route exact path="/">
                    <DropList />
                  </Route>
              </DropProvider>

          
            
        </>
    )
}