import { Icon } from "@iconify/react";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    message: string;
    severity: string;
}

const Confirm = ({ onClose, open, message, severity }: Props) => {
    return (
        <div className={`${open ? "block" : "hidden"}`}>
            <div className="fixed bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] rounded-lg px-5 py-8 text-center z-20">
                {severity === "success" ?
                    <Icon className="text-7xl text-green-600 inline-block" icon="icon-park-outline:check-one" /> : <Icon className="text-7xl text-red-600 inline-block" icon="ic:round-error" />
                }
                <p className="text-lg mt-3 font-oxygen">{message}</p>
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" onClick={onClose}></div>
        </div>
    );
};

export default Confirm;