import Link from "next/link";
import { Icon } from "@iconify/react";


const Touch = () => {
    return (
        <div className="text-white opacity-75 xxs:max-msm:text-center">
            <h4 className="text-2xl font-fredoka mb-5">Get in touch</h4>
            <p className="text-base font-oxygen mb-2">Unit A
                82 James Carter Road <br />
                Mildenhall <br />
                Suffolk<br />
                IP28 7DE<br />
            </p>
            <ul>
                <li className="my-2">
                    <Link href="mailto:info@wedogreetings.co.uk" className="flex gap-2 items-center xxs:max-msm:justify-center">
                        <Icon className="text-lg" icon="majesticons:mail" />
                        <span>info@wedogreetings.co.uk</span>
                    </Link>
                </li>
                <li className="my-2">
                    <Link href="tel:+01525300747" className="flex gap-2 items-center xxs:max-msm:justify-center">
                        <Icon className="text-lg" icon="entypo:old-phone" />
                        <span>01525300747</span>
                    </Link>
                </li>
            </ul>
        </div >
    );
};

export default Touch;