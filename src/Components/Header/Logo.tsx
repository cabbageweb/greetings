import Link from "next/link";
import Rive from "@rive-app/react-canvas";

const Logo = () => {
    return (
        <div className="basis-[12%]">
            <Link href="/" className="block h-[90px] md:h-[90px] smd:h-[75px] msm:h-[65px] sm:h-[55px] xxs:-[50px] w-[380px] md:w-[380px] smd:w-[300px] msm:w-[250px] sm:w-[200px] xxs:w-[180px]">
                <Rive src="/rive/logo.riv" width="100%" height="100%" />
            </Link>
        </div>
    );
};

export default Logo;