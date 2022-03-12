import React from "react";
import store from "./redux/redux-store";
import StoreContext from "./redux/store-context";


const Provider = (props: any) => {
    return (
        <div>
            <StoreContext.Provider value={store}>
                {props.children}
            </StoreContext.Provider></div>
    )
}

export default Provider