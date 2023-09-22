import { Icon } from "@iconify/react";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

//Data
import { data } from "./Data";

const Card = () => {
    return (
        <div className="mt-20 grid md:grid-cols-3 xxs:grid-cols-1 gap-5">
            {data.map((item, i) => (
                <AnimationOnScroll animateIn="animate__rubberBand" duration={1.2} delay={i * 50} key={i}>
                    <div className="rounded-xl bg-primary_2 text-center p-12 xl:p-16 sm:p-12 xxs:p-6">
                        <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center">
                            <Icon className="text-3xl text-main" icon={item.icon} />
                        </div>
                        <h5 className="text-lg font-fredoka text-main mt-5 mb-3">{item.title}</h5>
                        <p className="text-base font-oxygen opacity-60 mb-6">{item.description}</p>
                        <Link href="https://hirewedogreetings.shop.mysharefox.com/" target="_blank" className="bg-main py-2.5 px-8 rounded-md text-white font-amatic text-lg">
                            Learn More
                        </Link>
                    </div>
                </AnimationOnScroll>
            ))}
        </div>
    );
};

export default Card;