import Rive from "@rive-app/react-canvas";
import moment from "moment";
import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";

//Components
import Form from "@/Components/ComingSoon/Form";

const ComingSoon = () => {
    const [mount, setMount] = useState(false);
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string>("");
    const expiryTimestamp = moment("2023-07-28T09:00:00").toDate()
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    //Handler
    const onLogin = () => {
        setError("")
        if (value === "67810") {
            window.location.href = "https://staging.wedogreetings.co.uk/"
        } else {
            setError("You enter a wrong password!")
        }
    }

    useEffect(() => {
        setMount(true)
    }, [])

    return (
        <div className="bg-[url('/images/bg-timer.jpeg')] bg-no-repeat bg-cover bg-center relative">
            <div className="w-[80%] msm:w-[80%] xxs:w-[90%] mx-auto text-center py-6 relative z-20">
                <div className="h-[180px] md:h-[180px] smd:h-[120px] lsm:h-[100px]  msm:h-[80px] sm:h-[70px] xxs:h-[60px] w-[900px] md:w-[900px] smd:w-[680px] lsm:w-[550px] msm:w-[450px] sm:w-[400px] xxs:w-[300px] mx-auto xxs:max-sm:mb-8">
                    <Rive src="/rive/logo.riv" width="100%" height="100%" />
                </div>
                <h3 className="text-5xl font-fredoka mb-5 text-white">Coming Soon</h3>
                <p className="text-base font-oxygen w-[90%] msm:w-[90%] xxs:w-full mx-auto text-white">
                    New to the UK, big, colourful personalised greeting signs available to rent, suitable for all occasions both indoors and outdoors.<br /> <br />
                    Choose your sign, your date, your location and leave the rest to us, we&apos;ll set up and we&apos;ll break down. Simple.<br /> <br />
                    Birthdays, Weddings, Congrats, Gender Reveals, in fact anything at all…
                </p>
                <div className="mt-10">
                    <div>
                        <input
                            placeholder="Give your password"
                            className="bg-white focus:outline-none py-1.5 px-4 rounded-md"
                            type="password"
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <button className="bg-[#bd3a81] text-white font-semibold uppercase py-2 px-8 mt-3 rounded-md" onClick={onLogin}>Login</button>
                    {error &&
                        <p className="text-white">{error}</p>
                    }
                </div>
                <div className="w-[70%] md:w-[70%] xxs:w-full mx-auto mt-12">
                    <Form />
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 w-full h-full"></div>
        </div>
    );
};

export default ComingSoon;
