import { useState } from "react";
import { Icon } from "@iconify/react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { AnimationOnScroll } from "react-animation-on-scroll";

//Interface
interface Inputs {
    name: string;
    phone: string;
    email: string;
    date: string;
    message: string;
}

const Form = () => {
    //State
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();

    //Submit
    const onSubmit: SubmitHandler<Inputs> = (value, e) => {
        setLoading(true)
        emailjs.sendForm('service_zyxtr5s', 'template_4gh1dkt', e?.target, 'MIVj6S4qxwhuET6pj')
            .then((result) => {
                setLoading(false);
                setMessage("We Receive Your Bookings!");
                reset();
            }, (error) => {
                setLoading(false);
                setMessage('Something went wrong. Try again!');
            });
    }

    return (
        <div className="bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)] rounded-lg p-10 sm:p-10 xxs:p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-3">
                    <div className="xxs:max-sm:col-span-2">
                        <label htmlFor="name" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Name</label>
                        <input
                            id="name"
                            placeholder="Name"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="text"
                            {...register("name", { required: true })}
                            required
                        />
                    </div>
                    <div className="xxs:max-sm:col-span-2">
                        <label htmlFor="phone" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Phone</label>
                        <input
                            id="phone"
                            placeholder="Phone"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="text"
                            {...register("phone", { required: true })}
                            required
                        />
                    </div>
                    <div className="xxs:max-sm:col-span-2">
                        <label htmlFor="email" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Email</label>
                        <input
                            id="email"
                            placeholder="Email"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="email"
                            {...register("email", { required: true })}
                            required
                        />
                    </div>
                    <div className="xxs:max-sm:col-span-2">
                        <label htmlFor="date" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Date</label>
                        <input
                            id="date"
                            placeholder="Date"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="date"
                            {...register("date", { required: true })}
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="message" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Message</label>
                        <textarea
                            id="message"
                            placeholder="Message"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            rows={4}
                            {...register("message", { required: true })}
                            required
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <button type="submit" className="flex gap-2 bg-main w-full py-2 rounded-md justify-center items-center text-white">
                        <Icon icon="mdi:message-badge" />
                        <span className="font-amatic font-bold text-lg">{loading ? "Please Wait" : "Submit"}</span>
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

export default Form;