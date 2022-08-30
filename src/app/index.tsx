import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../screens";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/> }/>
    </Routes>
  );
};
