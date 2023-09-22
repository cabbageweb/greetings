import { AnimationOnScroll } from "react-animation-on-scroll";

const Header = () => {
    return (
        <div className="text-center">
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.8}>
                <h5 className="text-2xl font-amatic font-bold text-main mb-4">Support</h5>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={0.7}>
                <h3 className="text-5xl sm:text-5xl xxs:text-4xl font-fredoka mb-6">Preferred Vendor List</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" duration={0.8}>
                <p className="text-base font-oxygen opacity-60">Streamline your support process with our curated Preferred Vendor List.</p>
            </AnimationOnScroll>
        </div>
    );
};

export default Header;