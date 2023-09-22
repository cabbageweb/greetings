import { Amatic_SC, Oxygen } from "next/font/google";
import localFont from "next/font/local";

export const amatic_sc = Amatic_SC({
    weight: ["400", "700"],
    variable: "--font-amatic",
    subsets: ["latin"]
});

export const oxygen = Oxygen({
    weight: ["400"],
    variable: "--font-oxygen",
    subsets: ["latin"]
});

export const fredoka_one = localFont({
    src: [
        {
            path: "./files/fredoka-one/regular.ttf",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--font-fedoka-one"
})