import React, { useState } from "react";

export const UsersContext = React.createContext()

function Usercontextcomponent({children}) {
    // console.log('Children', children)
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
  <UsersContext.Provider value={{users, setUsers}}>
    {children}

  </UsersContext.Provider>
    
  
  </>
}

export default Usercontextcomponent