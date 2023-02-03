/*
 * FileName: 单个色卡组件
 * Created Date: 2022-12-15 22:33:06
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-03 16:18:20
 * Modified By: 文初阳
 */
import React, { useMemo, useState } from "react";
import style from "./Item.module.scss";

import CmykComponent from "./cmyk/Cmyk";
import RgbComponent from "./rgb/Rgb";

interface IProps {
    cmyk: [number, number, number, number];
    rgb: [number, number, number];
    code: string;
    name: string;
    spell: string;
}

const Item: React.FC<IProps> = ({cmyk, code, name, rgb, spell}: IProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const curColor = useMemo(() => isHovered ? code : "#FCFCFC", [isHovered]);
    
    return (
        <div 
            className={style.wrapper} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <CmykComponent curColor={curColor} cmyk={cmyk} name={name} />
            <RgbComponent curColor={curColor} rgb={rgb} color={code} name={spell} />
        </div>
    );
};
export default Item;
