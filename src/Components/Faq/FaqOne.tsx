import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Icon } from "@iconify/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

//Data
const data = [
    {
        question: "Installation & Removal Hours",
        answer: "Please note our installation and removal times are both inside and outside of normal business hours. If you need an installation at a specific time on your chosen date this is subject to availability and a small surcharge. The surcharge is due to potential route changes that will be required to install at your specific time."
    },
    {
        question: "What areas do you serve?",
        answer: "We are rapidly rolling out nationally across the UK. Use our postcode search facility to find your local installer. Maybe you’re interested in becoming an installer, if so, please reach out to us at info@wedogreetings.co.uk."
    },
    {
        question: "How does it work?",
        answer: "To reserve your garden greetings you need to submit an order on our website. When filling out the order form, you'll be able to note the receivers’ favourite colours so that we can incorporate them into the Garden Card display. The order system will check our inventory to see that your items are available on your chosen date and, if so, will confirm your reservation. Please note all reservations and selection of inventory is on a first come first served basis. The further in advance you place your order, the more likely we are able to fulfil your request precisely.  Installation and removal times will be based on the volume of installations and removals scheduled for the same date. Subject to availability you can book more specific times for a small extra charge. PLEASE NOTE:  If your order is a gift to a household that is not your own, you MUST make sure to let the homeowners know we will be setting up in their yard. PLEASE NOTE:  You are paying for a rental and not purchasing the signs."
    },
    {
        question: "I live in military housing, am I allowed to rent your displays?",
        answer: "PLEASE NOTE:  Please note we need a flat level area for stand stability. A driveway or porch may also be used if the garden is extremely sloped."
    }
];


const FaqOne = () => {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={0.9}>
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

export default FaqOne;