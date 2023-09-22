import { ReactNode, Fragment } from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

//Seo
import Seo from "@/Utilis/Seo";

//Interface
interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <Fragment>
            <Seo />
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};

export default Layout;