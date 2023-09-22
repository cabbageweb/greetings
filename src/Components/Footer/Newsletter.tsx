import { useState } from "react";
import { Icon } from "@iconify/react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';


//Interface
interface Inputs {
    email: string;
}

const Newsletter = () => {
    //State
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>()

    //Submit
    const onSubmit: SubmitHandler<Inputs> = (value, e) => {
        setLoading(true)
        emailjs.sendForm('service_zyxtr5s', 'template_1breubb', e?.target, 'MIVj6S4qxwhuET6pj')
            .then((result) => {
                setLoading(false);
                setMessage("Thanks for your subscribing our newsletter!");
                reset();
            }, (error) => {
                setLoading(false);
                setMessage('Something went wrong. Try again!');
            });
    }

    return (
        <div className="text-white msm:max-md:col-span-2">
            <h5 className="text-2xl font-fredoka mb-5">Newsletter.</h5>
            <p className="text-base font-oxygen opacity-80">
                Signup for our newsletter to get updated information, insight, or promotions.
            </p>
            <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        placeholder="Email"
                        className="py-2.5 px-4 bg-white text-base font-oxygen rounded-lg w-full placeholder:text-gray-600 text-black focus:outline-none"
                        {...register("email", { required: true })}
                        required
                    />
                </div>
                <div className="mt-3">
                    <button className="flex gap-2 justify-center items-center bg-main py-2.5 rounded-md w-full">
                        <Icon icon="majesticons:mail-line" />
                        <span>{loading ? "Please Wait" : "Sign Up"}</span>
                    </button>
                </div>
                {message &&
                    <div className="text-center mt-3">
                        <p>{message}</p>
                    </div>
                }
            </form>
        </div>
    );
};

export default Newsletter;