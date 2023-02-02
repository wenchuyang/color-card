/*
 * FileName: 单个 item 的 CMYK 展示
 * Created Date: 2023-02-01 15:17:26
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-02 15:31:15
 * Modified By: 文初阳
 */
import React, { useEffect, useMemo, useRef } from "react";
import style from "./Cmyk.module.scss";

import ProgressBar from "progressbar.js";

interface IProps {
    cmyk: [number, number, number, number];
    color: string;
    curColor: string;
    name: string;
}

const CmykComponent: React.FC<IProps> = ({cmyk, color, curColor, name}: IProps) => {
    const [cyanNum, magentaNum, yellowNum, keyPlateNum] = cmyk;
    const cyan = useRef(null);
    const magenta = useRef(null);
    const yellow = useRef(null);
    const keyPlate = useRef(null);
    const trailColor = "#CCC";
    
    useEffect(()=>{
        const bar = cyan.current ? new ProgressBar.Circle(cyan.current,{
            strokeWidth: 28,
            easing: "easeInOut",
            duration: 1400,
            color: curColor,
            trailColor,
            trailWidth: 28,
            svgStyle: null
        }) : null;
        bar?.animate(cyanNum / 100); // Number from 0.0 to 1.0
    }, [cyan.current]);
    useEffect(()=>{
        const bar = magenta.current ? new ProgressBar.Circle(magenta.current,{
            strokeWidth: 28,
            easing: "easeInOut",
            duration: 1400,
            color: curColor,
            trailColor,
            trailWidth: 28,
            svgStyle: null
        }) : null;
        bar?.animate(magentaNum / 100); // Number from 0.0 to 1.0
    }, [magenta.current]);
    useEffect(()=>{
        const bar = yellow.current ? new ProgressBar.Circle(yellow.current,{
            strokeWidth: 28,
            easing: "easeInOut",
            duration: 1400,
            color: curColor,
            trailColor,
            trailWidth: 28,
            svgStyle: null
        }) : null;
        bar?.animate(yellowNum / 100); // Number from 0.0 to 1.0
    }, [yellow.current]);
    useEffect(()=>{
        const bar = keyPlate.current ? new ProgressBar.Circle(keyPlate.current,{
            strokeWidth: 28,
            easing: "easeInOut",
            duration: 1400,
            color: curColor,
            trailColor,
            trailWidth: 28,
            svgStyle: null
        }) : null;
        bar?.animate(keyPlateNum / 100); // Number from 0.0 to 1.0
    }, [keyPlate.current]);
    return (
        <div className={style.inner}>
            <div className={style.cmyk}>
                <div ref={cyan} className={style.ring}></div>
                <div ref={magenta} className={style.ring}></div>
                <div ref={yellow} className={style.ring}></div>
                <div ref={keyPlate} className={style.ring}></div>
            </div>
            <div className={style.name}>{name}</div>
        </div>
    );
};
export default CmykComponent;
