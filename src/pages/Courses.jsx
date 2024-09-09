//import React from "react";
//import BannerBackground from "../components/Assets/home-banner-background.png";
//import BannerImage from "../components/Assets/home-banner-image.png";


import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import {useAuth} from "../hooks/AuthProvider";
import ComplexSearch from "../components/complexSearch";

const Courses = () => {
    const auth = useAuth();

    if (!auth.user) {
        return <div> loading ...</div>;

    }

    return (
        <Layout>

            <h1 className={"font-bold text-3xl text-center"}>
                Welcome Back {auth.user.username}!
            </h1>
            <div id={"search-element"}>
                <ComplexSearch />


            </div>



        </Layout>
    );
};

export default Courses;
