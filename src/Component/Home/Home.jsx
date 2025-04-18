import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;