//Components
import Container from "@/Components/Common/Container";
import Touch from "@/Components/Footer/Touch";
import Logo from "@/Components/Footer/Logo";
import Newsletter from "@/Components/Footer/Newsletter";
import Copyright from "@/Components/Footer/Copyright";
import Curve from "@/Components/Footer/Curve";

const Footer = () => {
    return (
        <footer id="contact">
            <div className="pt-36 bg-hover relative">
                <Container>
                    <div className="grid md:grid-cols-3 msm:grid-cols-2 xxs:grid-cols-1 gap-10">
                        <Touch />
                        <Logo />
                        <Newsletter />
                    </div>
                    <Copyright />
                </Container>
                <Curve />
            </div>
        </footer>
    );
};

export default Footer;