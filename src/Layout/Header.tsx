import { useState, useEffect } from "react";

//Components
import Container from "@/Components/Common/Container";
import Logo from "@/Components/Header/Logo";
import Nav from "@/Components/Header/Nav";

const Header = () => {
    //State
    const [isScrolled, setIsScrolled] = useState(false);

    //Effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header" className={`fixed transition-[background-color] duration-300 ease-in-out top-0 left-0 w-full z-50 ${isScrolled ? "bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)]" : ""}`}>
            <Container className="flex gap-2 items-center py-0 relative">
                <Logo />
                <Nav />
            </Container>
        </header>
    );
};

export default Header;