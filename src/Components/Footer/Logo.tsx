import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Rive from "@rive-app/react-canvas";


//Data
const data = [
    { icon: "jam:facebook", url: "/" },
    { icon: "teenyicons:instagram-outline", url: "/" },
    { icon: "bi:twitter", url: "/" },
    { icon: "bi:youtube", url: "/" },
]

const Logo = () => {
    return (
        <div className="text-white text-center">
            <div className="h-[50px] w-[250px] mx-auto">
                <Rive src="/rive/logo.riv" width="100%" height="100%" />
            </div>
            <h5 className="text-2xl font-fredoka mt-5 mb-5">Let&apos;s fun together</h5>
            <ul className="flex gap-2 justify-center">
                {data.map((item, i) => (
                    <li key={i}>
                        <Link href={item.url} className="w-8 h-8 rounded-md bg-white text-main flex items-center justify-center">
                            <Icon className="text-base" icon={item.icon} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Logo;