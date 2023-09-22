import Link from "next/link";

const Copyright = () => {
    return (
        <div className="mt-16">
            <hr className="opacity-30" />
            <p className="py-5 text-center text-white text-sm font-oxygen">Copyright © {new Date().getFullYear()} We Do Greetings, All rights reserved. Powered by <Link href="https://codestation21.com/" target="_blank">Powered by Code Station-21</Link></p>
        </div>
    );
};

export default Copyright;