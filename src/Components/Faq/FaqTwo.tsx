import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Icon } from "@iconify/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

//Data
const data = [
    {
        question: "Can signs be set up outside of normal installation times?",
        answer: "We are here to meet the needs of your occasion. If you need a display assembled while the kids are at school or the recipient is at work, we will do our best to make it happen. Please make a note on the order form in the final section for additional instructions that you need a different installation time and we will work to accommodate it."
    },
    {
        question: "How far in advance should I place my order?",
        answer: "Our themed packages are very popular and book up fast on a strictly first come first serve basis. Please place your order early to ensure availability"
    },
    {
        question: "Can I buy signs from you to keep?",
        answer: "We are a rental only business.  Purchasing is not available at this time."
    },
    {
        question: "What happens in the event of severe weather?",
        answer: "Weather can be unpredictable and may delay setups, or in the worst cases prevent us from setting up your display. Inclement weather includes lightning/thunderstorms, heavy rain, snow, high winds (40+mph) and any other Act of God that would put us or our garden display in harm's way. If the previously mentioned situations arise we will first attempt to reschedule, if that is not possible you will be given a full refund."
    }
];



const FaqTwo = () => {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeInRight" duration={0.9}>
                <Accordion transition transitionTimeout={250}>
                    {data.map((item, i) => (
                        <AccordionItem
                            key={i}
                            contentProps={{ className: "transition-[height] duration-[250] ease-[cubic-bezier(0,0,0,1)] font-oxygen" }}
                            header={({ state: { isEnter } }) => (
                                <>
                                    <p className="flex-1 text-left">{item.question}</p>
                                    <div className={`transition-all duration-300 ease-in-out ${isEnter ? "rotate-180" : ""}`}>
                                        <Icon className={`text-2xl transition-all duration-500 ease-in-out ${isEnter ? "text-white" : "text-hover"}`} icon="mdi:arrow-bottom-drop-circle" />
                                    </div>
                                </>
                            )}
                            buttonProps={{
                                className: ({ isEnter }) =>
                                    `flex w-full gap-5 p-5 rounded-lg font-fredoka transition-all duration-500 ease-in-out ${isEnter ? "bg-main" : "bg-primary_2"}`
                            }}
                            className="rounded-lg bg-secondary my-4"
                            panelProps={{ className: "p-6" }}
                        >
                            {item.answer}
                        </AccordionItem>
                    ))}
                </Accordion>
            </AnimationOnScroll>
        </div>
    );
};

export default FaqTwo;