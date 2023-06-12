import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import AddUser from "./component/Add User"
import Profile from './component/Profile'
import PendingRequest from './component/Pending Request'
import Task from "./component/Task";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfileDetails from "./component/ProfileDetails";
import ResetPassword from "./component/ResetPassword";
import { useState } from "react";
function App() {
  let [users, setUsers] = useState([
    {
      name: 'Jack',
      email: 'jack12@gmail.com',
      mobile: 9729475917,
      dob: "1990-01-21"
    },
    {
      name: 'Joe',
      email: 'joe123@gmail.com',
      mobile: 7622829880,
      dob: "1993-02-11"
    },
    {
      name: 'Jim',
      email: 'jim222@gmail.com',
      mobile: 8468498891,
      dob: "1996-09-12"
    },
    {
      name: 'Hare',
      email: 'hare93@gmail.com',
      mobile: 7622842985,
      dob: "2001-01-01"
    }
  ])
  return <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers} />} />
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path="/profile" element={<Profile users={users} setUsers={setUsers} />}>
            <Route path='details' element={<ProfileDetails users={users} setUsers={setUsers} />} />
            <Route path='reset-password' element={<ResetPassword />} />
          </Route>
          <Route path="/pending-request" element={<PendingRequest />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<Navigate to='/dashboard' />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App;