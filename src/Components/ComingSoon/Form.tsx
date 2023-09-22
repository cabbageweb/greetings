import { useState } from "react";
import { Icon } from "@iconify/react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Link from "next/link";

import Confirm from "./Confirm";

//Interface
interface Inputs {
    name: string;
    email: string;
    postCode: string;
    number: string;
    service: boolean;
    business: boolean;
    message: string;
}

const Form = () => {
    //State
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

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
                setMessage("Thank you for reaching out, we’ll be in touch very soon");
                setSeverity("success");
                setOpen(true);
                reset();
            }, (error) => {
                setLoading(false);
                setMessage("Something went wrong. Try again!");
                setSeverity("error");
                setOpen(true)
            });
    }

    return (
        <div className="bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)] rounded-lg p-10 sm:p-10 xxs:p-6 text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-left font-amatic text-4xl mb-4">Register Your Interest!</h3>
                <div className="mb-8">
                    <div className="flex gap-2 items-baseline mb-3">
                        <input
                            type="checkbox"
                            id="service"
                            {...register("service")}
                        />
                        <label htmlFor="service" className="cursor-pointer text-base font-oxygen select-none">I&apos;m interested in your service</label>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <input
                            type="checkbox"
                            id="business"
                            {...register("business")}
                        />
                        <label htmlFor="business" className="cursor-pointer text-base font-oxygen select-none">I&apos;m interested in your business opportunity</label>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="xxs:max-sm:col-span-2">
                        <label htmlFor="name" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block text-left">Name</label>
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
                        <label htmlFor="email" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block text-left">Email</label>
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
                        <label htmlFor="postCode" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block text-left">Postcode</label>
                        <input
                            id="postCode"
                            placeholder="Postcode"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="text"
                            {...register("postCode", { required: true })}
                            required
                        />
                    </div>
                    <div className="xxs:max-sm:col-span-2">
                        <label htmlFor="number" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block text-left">Telephone Number</label>
                        <input
                            id="number"
                            placeholder="Telephone Number"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="text"
                            {...register("number", { required: true })}
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="message" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Comments</label>
                        <textarea
                            id="message"
                            placeholder="Comments"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            rows={4}
                            {...register("message", { required: true })}
                            required
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className="flex gap-2 bg-main w-full py-2 rounded-md justify-center items-center text-white">
                        <Icon icon="mdi:message-badge" />
                        <span className="font-amatic font-bold text-lg">{loading ? "Please Wait" : "Submit"}</span>
                    </button>
                </div>
                <Confirm
                    open={open}
                    onClose={() => setOpen(false)}
                    message={message}
                    severity={severity}
                />
                <div className="mt-5">
                    <p className="text-lg font-fredoka mb-1">For More Support Please Contact</p>
                    <Link href="mailto:" className=" flex items-center gap-2 group w-max"><Icon icon="majesticons:mail" className="text-lg -mb-px" /><span className="text-base font-oxygen group-hover:underline">info@wedogreetings.co.uk</span></Link>
                </div>
            </form>
        </div>
    );
};

export default Form;