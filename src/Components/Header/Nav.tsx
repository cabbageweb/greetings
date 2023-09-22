import { Fragment, useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Data
const data = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Service", id: "service" },
    { name: "Client", id: "testimonial" },
    { name: "Contact Us", id: "contact" }
]

const Nav = () => {
    //State
    const [menu, setMenu] = useState<boolean>(false);

    return (
        <Fragment>
            <div className="flex-1 text-right lg:block xxs:hidden">
                <ul className="flex gap-7 justify-end">
                    {data.map((item, i) => (
                        <li key={i}>
                            <ScrollLink
                                to={item.id}
                                className="naves font-fredoka text-base cursor-pointer"
                                activeClass="selected"
                                smooth={true}
                                offset={-65}
                                duration={400}
                                spy={true}
                            >
                                {item.name}
                            </ScrollLink>
                        </li>
                    ))}
                    <li>
                        <Link href="https://hirewedogreetings.shop.mysharefox.com/" target="_blank" className="bg-main text-lg text-white py-2 px-5 rounded font-amatic">
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1 text-right lg:hidden xxs:block">
                <ul className="flex gap-3 items-center justify-end">
                    <li>
                        <button className="bg-main text-white py-1.5 px-3 rounded" onClick={() => setMenu(!menu)}>
                            <Icon className="text-2xl" icon="majesticons:menu-line" />
                        </button>
                    </li>
                    <li className="xxs:max-sm:hidden">
                        <Link href="https://hirewedogreetings.shop.mysharefox.com/" target="_blank" className="bg-main text-lg text-white py-2 px-5 rounded font-amatic">
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className={`absolute w-full left-0 bg-white text-left rounded-md shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)] p-5 top-full transition-all duration-300 ease-in-out ${menu ? "translate-y-0 opacity-100 visible" : "translate-y-5 opacity-0 invisible"}`}>
                {data.map((item, i) => (
                    <li key={i} className="my-3">
                        <ScrollLink
                            to={item.id}
                            className="naves font-fredoka text-base cursor-pointer"
                            activeClass="selected"
                            smooth={true}
                            offset={-65}
                            duration={400}
                            spy={true}
                        >
                            {item.name}
                        </ScrollLink>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Nav;