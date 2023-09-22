import { AnimationOnScroll } from "react-animation-on-scroll";

const Header = () => {
    return (
        <div className="text-center">
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.8}>
                <h5 className="text-2xl font-amatic font-bold text-main mb-4">Why Choose Us</h5>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={0.7}>
                <h3 className="text-5xl font-fredoka mb-4 xxs:max-sm:hidden">Making Moments In To <br /> Memories</h3>
                <h3 className="text-4xl font-fredoka mb-4 xxs:max-sm:block">Making Moments In To Memories</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" duration={0.8}>
                <p className="text-base font-oxygen opacity-60">We believe that every moment is unique</p>
            </AnimationOnScroll>
        </div>
    );
};

export default Header;