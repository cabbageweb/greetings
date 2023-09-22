import { Link } from "react-scroll/modules";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Content = () => {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.4}>
                <h5 className="text-2xl font-amatic text-main font-bold mb-5">Wo We Are</h5>
                <h3 className="text-5xl sm:text-5xl xxs:text-4xl font-fredoka mb-6">There’s nothing more magical than a child’s imagination</h3>
                <p className="text-base font-oxygen opacity-60 mb-12">WE DO GREETINGS is rapidly rolling out its unique garden greeting service nationwide, with special event lawn greeting sign rentals for your special occasions.</p>
                <Link
                    to="service"
                    smooth={true}
                    offset={-65}
                    duration={400}
                    spy={true}
                    className="bg-main text-lg font-amatic py-2.5 px-8 rounded-md text-white cursor-pointer"
                >
                    Discover Moref
                </Link>
            </AnimationOnScroll>
        </div>
    );
};

export default Content;