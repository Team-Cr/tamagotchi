import { Routes, Route } from "react-router";
import { Profile } from '@/pages/profile'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}
