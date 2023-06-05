import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mainpage from './components/mainpage';
import { Route, Switch } from 'react-router-dom';
import Data from './components/Data';
import AddUserDetails from './components/AddUser';
import React, { useState } from "react";
import EditUser from './components/editUser';


function App() {

  const userData = [
    {
      id: 101,
      name: "Dravid",
      email: "dravid@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 102,
      name: "Sachin",
      email: "sachin@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 103,
      name: "Sehwag",
      email: "sehwag@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 104,
      name: "Gambhir",
      email: "gambhir@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 105,
      name: "Zaheer",
      email: "Zaheer@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 106,
      name: "Yuvaraj",
      email: "yuvaraj@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
  ];
  const [person,SetPerson] = useState(userData);

  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
               <Mainpage 
               userDetail="User Details"
               contentstyle="contentparent"
               children={<Data person={person} SetPerson={SetPerson}/>}
               />
            </Route>
            <Route path="/add/user">
               <Mainpage 
                 userDetail="Add User"
                 children={<AddUserDetails person={person} SetPerson={SetPerson}/>}
                />  
            </Route>

            <Route path="/edit/user/:id">
               <Mainpage 
                 userDetail="Edit User"
                 children={<EditUser person={person} SetPerson={SetPerson}/>}
                />  
            </Route>

            <Route path="**">
                   <h1>404 Page not found</h1>
            </Route>

        </Switch>
    </div>
  );
}

export default App;
