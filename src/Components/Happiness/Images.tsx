import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Images = () => {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__rotateInUpLeft" duration={0.9}>
                <Image src="/images/happiness/main.jpg" alt="Happiness" width={1080} height={720} className="mask-2" />
            </AnimationOnScroll>
        </div>
    );
};

export default Images;