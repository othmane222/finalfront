import NavBar from "./NavBar";
import Footer from "./Footer";


const Layout = ({children}) => {

    return (
        <>
            <div className={"space-y-20"}>
        <NavBar />
        {children}
        <Footer />
            </div>

        </>
    );


}

export default Layout;