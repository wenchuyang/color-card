/*
 * FileName: 单个 item 的 CMYK 展示
 * Created Date: 2023-02-01 15:17:26
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-06 15:48:40
 * Modified By: 文初阳
 */
import React from "react";
import style from "./Cmyk.module.scss";

import { Progress } from "antd";

interface IProps {
    cmyk: [number, number, number, number]; // CMYK 的值
    curColor: string; // 当前表现的样式颜色
    name: string; // 颜色名称
}

const CmykComponent: React.FC<IProps> = ({ cmyk, curColor, name }: IProps) => {
    const [cyanNum, magentaNum, yellowNum, keyPlateNum] = cmyk;
    const trailColor = "rgba(0,0,0,.1)";

    return (
        <div className={style.inner}>
            <div className={style.cmyk}>
                <div className={style.ring}>
                    <Progress
                        width={28}
                        type="circle"
                        showInfo={false}
                        strokeLinecap="butt"
                        strokeWidth={28}
                        percent={cyanNum}
                        strokeColor={curColor}
                        trailColor={trailColor}
                    />
                </div>
                <div className={style.ring}>
                    <Progress
                        width={28}
                        type="circle"
                        showInfo={false}
                        strokeLinecap="butt"
                        strokeWidth={28}
                        percent={magentaNum}
                        strokeColor={curColor}
                        trailColor={trailColor}
                    />
                </div>
                <div className={style.ring}>
                    <Progress
                        width={28}
                        type="circle"
                        showInfo={false}
                        strokeLinecap="butt"
                        strokeWidth={28}
                        percent={yellowNum}
                        strokeColor={curColor}
                        trailColor={trailColor}
                    />
                </div>
                <div className={style.ring}>
                    <Progress
                        width={28}
                        type="circle"
                        showInfo={false}
                        strokeLinecap="butt"
                        strokeWidth={28}
                        percent={keyPlateNum}
                        strokeColor={curColor}
                        trailColor={trailColor}
                    />
                </div>
                
            </div>
            <div className={style.name} style={{color: curColor}}>{name}</div>
        </div>
    );
};
export default CmykComponent;
