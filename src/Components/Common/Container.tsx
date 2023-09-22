import { ReactNode } from "react";

//Interface
interface Props {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={`xl:container xl:mx-auto px-12 lsm:px-12 msm:px-6 xxs:px-4 ${className}`}>
            {children}
        </div>
    );
};

export default Container;