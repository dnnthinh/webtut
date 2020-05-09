import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";

export function PrivateRoute(props) {
    let { isLoggedIn, children, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) => {
                return isLoggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
            }
        />
    );
}