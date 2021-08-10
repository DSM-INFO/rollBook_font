import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainScreen from "./mainScreen/MainScreen";
import AddSchedule from "./admin/addList/AddSchedule";
import EmptyPage from "./emptyPage/EmptyPage";
import ShowSchedule from "./showDoList/ShowSchedule";
import RollCall from "./attendanceCheck/RollCall";
import UserHeader from "./header/UserHeader";
import AdminHeader from "./header/AdminHeader";
import ULoginForm from "./userLogin/ULoginForm";
import Form from "./Signup/Form";
import RollS from "./Roll/RollS";
import RollG1 from "./Roll/RollG1";
import "./css/index.css";
import LoginForm from"./admin/LoginFrom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/user" />
                <Route path="/user">
                    <UserHeader />
                    <Switch>
                        <Route exact path="/user/" component={MainScreen} />

                        <Route exact path="/user/login" component={ULoginForm} />
                        <Route
                            exact
                            path="/user/showList"
                            component={ShowSchedule}
                        />
                        <Route
                            exact
                            path="/user/rollCall"
                            component={RollCall}
                        />
                        <Route exact path="/user/signup" component={Form} />
                        <Route path="*" component={EmptyPage} />
                    </Switch>
                </Route>

                <Route path="/admin">
                    <AdminHeader />
                    <Switch>
                        <Route exact path="/admin/" component={MainScreen} />
                        
                        <Route exact path="/admin/rollShow" component={RollS} />
                        <Route
                            exact
                            path="/admin/show:grade"
                            component={RollG1}
                        />
                        <Route
                            exact
                            path="/admin/addList"
                            component={AddSchedule}
                        />
                        <Route exact path="/admin/login" component={LoginForm} />
                        <Route path="*" component={EmptyPage} />
                    </Switch>
                </Route>

                <Route path="*">
                    <UserHeader />
                    <EmptyPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
