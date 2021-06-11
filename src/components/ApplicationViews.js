import React from "react"
import { Route } from "react-router-dom"
import { DropForm } from "./drop/DropForm"
import { DropList } from "./drop/DropList"
import { DropProvider } from "./drop/DropProvider"
export const ApplicationViews = () => {
    return (
        <>
          
              <DropProvider>
                  <Route exact path="/">
                    <DropList />
                  </Route>
                  <Route exact path="/edit/:dropId(\d+)">
                    <DropForm />
                  </Route>
                  <Route exact path="/create">
                    <DropForm />
                  </Route>
              </DropProvider>

          
            
        </>
    )
}