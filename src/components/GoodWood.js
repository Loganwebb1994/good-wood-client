import './GoodWood.css';
import {ApplicationViews} from "./ApplicationViews"
import { Route, Redirect, useHistory } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"


export const GoodWood = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("goodwood_user")) {
                return ( <>
                    <ApplicationViews />
                </>)
            } else {
                return (<Redirect to="/login" />)
            }
        }} />

        <Route path="/login" >
            <Login/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
    </>
    )
