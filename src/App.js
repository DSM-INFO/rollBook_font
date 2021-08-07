import React from "react";
import MainScreen from "./mainScreen/MainScreen";
import "./css/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddSchedule from "./admin/AddSchedule";
import EmptyPage from "./emptyPage/EmptyPage";
import ShowSchedule from "./showDoList/ShowSchedule";
import RollCall from "./attendanceCheck/RollCall";
import UserHeader from "./header/UserHeader";
import AdminHeader from "./header/AdminHeader";
import UApps from "./userLogin/UApps";
import Form from "./Signup/Form";
import RollS from "./Roll/RollS";
import RollG1 from "./Roll/RollG1";
import RollG2 from "./Roll/RollG2";
import RollG3 from "./Roll/RollG3";

const App = () => {
    const Header = () => {
        if (1) {
            return <AdminHeader />;
        } else {
            return <UserHeader />;
        }
    };

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <MainScreen />
                </Route>

                <Route exact path="/login">
                    <UApps />
                </Route>

                <Route exact path="/addList">
                    <AddSchedule />
                </Route>

                <Route exact path="/showList">
                    <ShowSchedule />
                </Route>

                <Route exact path="/rollCall">
                    <RollCall />
                </Route>

                <Route exact path="/signup">
                    <Form />
                </Route>

                <Route exact path="/rollShow">
                    <RollS />
                </Route>

                <Route exact path="/show:grade">
                    <RollG1 />
                </Route>

                {/* <Route exact path="/show2">
                    <RollG2/>
                </Route>

                <Route exact path="/show3">
                    <RollG3/>
                </Route> */}

                <Route>
                    <EmptyPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
