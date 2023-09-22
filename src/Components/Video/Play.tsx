import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import ModalVideo from "react-modal-video";
import "node_modules/react-modal-video/scss/modal-video.scss";


const Play = () => {
    //States
    const [play, setPlay] = useState<boolean>(false);

    return (
        <Fragment>
            <div className="w-24 h-24 mx-auto rounded-full mt-10 bg-white flex items-center justify-center cursor-pointer select-none" onClick={() => setPlay(true)}>
                <Icon className="text-5xl text-main" icon="mingcute:play-fill" />
            </div>
            <ModalVideo channel="youtube" {...{ autoPlay: true }} isOpen={play} videoId="VhBl3dHT5SY" onClose={() => setPlay(false)} />
        </Fragment>
    );
};

export default Play;