/*
 * FileName: 当前色值展示组件
 * Created Date: 2023-02-05 00:08:47
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-06 15:49:38
 * Modified By: 文初阳
 */
import { Progress } from "antd";
import React from "react";
import style from "./Color.module.scss";


interface IProps {
    cmyk: [number, number, number, number];
    rgb: [number, number, number];
}

const Color: React.FC<IProps> = ({cmyk, rgb}: IProps) => {
    const [cyanNum, magentaNum, yellowNum, keyPlateNum] = cmyk;
    const [red, green, blue] = rgb;
    const trailColor = "rgba(0,0,0,.1)";
    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                C
                <Progress
                    percent={cyanNum}
                    width={48}
                    type="circle"
                    format={(n) => <span style={{color: "#009de0", fontSize: "24px"}}>{n}</span>}
                    strokeLinecap="butt"
                    strokeWidth={4}
                    strokeColor="#009de0"
                    trailColor={trailColor}
                />
            </div>
            <div className={style.item}>
                M
                <Progress
                    percent={magentaNum}
                    width={48}
                    type="circle"
                    format={(n) => <span style={{color: "#e20079", fontSize: "24px"}}>{n}</span>}
                    strokeLinecap="butt"
                    strokeWidth={4}
                    strokeColor="#e20079"
                    trailColor={trailColor}
                />
            </div>
            <div className={style.item}>
                Y
                <Progress
                    percent={yellowNum}
                    width={48}
                    type="circle"
                    format={(n) => <span style={{color: "#ffeb00", fontSize: "24px"}}>{n}</span>}
                    strokeLinecap="butt"
                    strokeWidth={4}
                    strokeColor="#ffeb00"
                    trailColor={trailColor}
                />
            </div>
            <div className={style.item}>
                K
                <Progress
                    percent={keyPlateNum}
                    width={48}
                    type="circle"
                    format={(n) => <span style={{color: "#1a171b", fontSize: "24px"}}>{n}</span>}
                    strokeLinecap="butt"
                    strokeWidth={4}
                    strokeColor="#1a171b"
                    trailColor={trailColor}
                />
            </div>
            <div className={style.item}>
                <span>R</span>
                <span className={style.num}>{red}</span>
            </div>
            <div className={style.item}>
                <span>G</span>
                <span className={style.num}>{green}</span>
            </div>
            <div className={style.item}>
                <span>B</span>
                <span className={style.num}>{blue}</span>
            </div>
        </div>
    );
};
export default Color;