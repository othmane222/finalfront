
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {useAuth} from "../hooks/AuthProvider";
import {useLocation} from "react-router-dom";

const NavBar =  () => {
    const auth = useAuth();
    const location = useLocation();

    return (
        <Navbar fluid rounded className={"bg-gray-50"}>
            <Navbar.Brand href="https://flowbite-react.com">
                <div id="logo" className={"text-3xl bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent"}>
                    CRAFTY
                </div>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">{auth.user.username}</span>
                        <span className="block truncate text-sm font-medium">{auth.user.email}</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Courses</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={(e) => auth.setToken("")}>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={location.pathname === "/dashboard"} href="/dashboard">DashBoard</Navbar.Link>
                <Navbar.Link active={location.pathname === "/courses"} href="/courses"> Courses</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}






export default NavBar;
