import { Zoom } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

//Components
import Content from "@/Components/Hero/Content";
import Curves from "@/Components/Hero/Curves";

const images = [
    { url: "/images/slides/slide-1.jpg", alt: "Slide1" },
    { url: "/images/slides/slide-2.jpg", alt: "Slide2" }
];

const Hero = () => {
    return (
        <section id="home">
            <div className="relative overflow-hidden">
                <Zoom
                    scale={1.5}
                    indicators={false}
                    arrows={false}
                    pauseOnHover={false}
                    transitionDuration={4000}
                    duration={4000}
                >
                    {images.map((item, index) => (
                        <div key={index} className="relative aspect-[8/5] md:aspect-[8/5] smd:aspect-[8/7] msm:aspect-[8/8] sm:aspect-[8/10] xs:aspect-[8/13] xxs:aspect-[8/14]">
                            <Image src={item.url} alt={item.alt} fill className="object-cover object-center" />
                        </div>
                    ))}
                </Zoom>
                <Content />
                <Curves />
            </div>
        </section>
    );
};

export default Hero;