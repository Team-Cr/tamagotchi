import { Routes, Route } from "react-router";
import { lazy } from "react";

const ProfilePage = lazy(() => import('./profile'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  )
}
