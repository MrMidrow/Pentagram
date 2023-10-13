import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivatRouter from "./PrivatRouter"

import { ROUTING } from "./constants/constants";

import Login from "./containers/Login/Login";
import HomePage from "./containers/HomePage/HomePage";

const AppRouter = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        {/* <Route element={<PrivatRouter/>}>
          <Route path="/home" element={<HomePage />} />
          <Route path={ROUTING.about} element={<AboutPage/>} />
          <Route path={ROUTING.search} element={<Search/>}/>
          <Route path={ROUTING.profile} element={<ProfilePage/>} />
          <Route path={ROUTING.settings} element={<SettingsPage/>} />
        </Route> */}
        <Route path="*" element={<div>Error 404 not found</div>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter;