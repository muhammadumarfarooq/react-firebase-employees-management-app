import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import EditEmployee from "./components/EditEmployee";
import NewEmployee from "./components/newEmployee/NewEmployee";
import ViewEmployee from "./components/viewEmployee";
import TopNavbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNavbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/new' component={NewEmployee} />
            <Route exact path='/edit/:employee_id' component={EditEmployee} />
            <Route exact path='/:employee_id' component={ViewEmployee} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
