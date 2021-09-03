import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import JobListPage from "./components/pages/JobListPage";
import RoleAccessMatrixPage from "./components/pages/RoleAccessMatrixPage";
import UserListPage from "./components/pages/UserList";
import NewUserPage from "./components/pages/NewUserPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            exact
            from="/"
            render={(props) => {
              console.log("Trying to Launch Dashboard");
              <Dashboard {...props} />;
            }}
          />
          <Route
            exact
            from="/joblist"
            render={(props) => <JobListPage {...props} />}
          />
          <Route
            exact
            from="/roleam"
            render={(props) => <RoleAccessMatrixPage {...props} />}
          />
          <Route
            exact
            from="/userlist"
            render={(props) => <UserListPage {...props} />}
          />
          <Route
            exact
            from="/newuser"
            render={(props) => <NewUserPage {...props} />}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
