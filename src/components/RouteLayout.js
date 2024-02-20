import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import NavBar from "./NavBar";

function RouteLayout() {
  return (
    <>
      <Provider store={store}>
        <div>
          <NavBar />

          <main>
            <Outlet />
          </main>
        </div>
      </Provider>
    </>
  );
}

export default RouteLayout;
