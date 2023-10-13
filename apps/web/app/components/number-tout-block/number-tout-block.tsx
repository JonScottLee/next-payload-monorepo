'use client'

import { INumberTout } from "@org/cms";
import { FC } from "react";
import { useCountUp } from "use-count-up";

export const NumberToutBlock: FC<INumberTout> = ({ number, text, numberSuffix, countUp }) => {
    const { value } = useCountUp({
        isCounting: true,
        end: number,
        duration: countUp ? 1.2 : 0
    })
      
    return (
        <div className="text-center">
            <div className="text-6xl md:text-7xl font-black mb-3">{value}{numberSuffix}</div>
            <p>{text}</p>
        </div>
    )
}