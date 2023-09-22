import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

//Data
const data = [
    { image: "/images/vendor/treva.png", alt: "Treva" },
    { image: "/images/vendor/solaytic.png", alt: "Solaytic" },
    { image: "/images/vendor/lighting.png", alt: "Lighting" },
    { image: "/images/vendor/kanba.png", alt: "Kanba" },
    { image: "/images/vendor/aven.png", alt: "Aven" },
    { image: "/images/vendor/ideaa.png", alt: "Ideaa" },
    { image: "/images/vendor/circle.png", alt: "Circle" },
    { image: "/images/vendor/fox-hub.png", alt: "Fox Hub" },
]

const Card = () => {
    return (
        <div className="grid grid-cols-4 smd:grid-cols-4 sm:grid-cols-2 xxs:grid-cols-1 gap-5 mt-16">
            {data.map((item, i) => (
                <AnimationOnScroll key={i} animateIn="animate__flipInX" duration={1.2} delay={i * 50}>
                    <div className="bg-white p-6 rounded-lg">
                        <Image src={item.image} alt={item.alt} width={2010} height={600} />
                    </div>
                </AnimationOnScroll>
            ))}
        </div>
    );
};

export default Card;