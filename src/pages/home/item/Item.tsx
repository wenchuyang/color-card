/*
 * FileName: 单个色卡组件
 * Created Date: 2022-12-15 22:33:06
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-04 23:59:17
 * Modified By: 文初阳
 */
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import style from "./Item.module.scss";

import CmykComponent from "./cmyk/Cmyk";
import RgbComponent from "./rgb/Rgb";
import { TColor } from "../../../constants/colors";

interface IProps {
    cmyk: [number, number, number, number];
    rgb: [number, number, number];
    code: string;
    name: string;
    spell: string;
    setCurItem: Dispatch<SetStateAction<TColor | undefined>>;
}

const Item: React.FC<IProps> = (curItem: IProps) => {
    const {setCurItem, cmyk, code, name, rgb, spell} = curItem;
    const [isHovered, setIsHovered] = useState(false);
    const curColor = useMemo(() => isHovered ? code : "#FCFCFC", [isHovered]);
    
    return (
        <div 
            className={style.wrapper}
            style={{borderTopColor: code}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {setCurItem(curItem);}}>
            <CmykComponent curColor={curColor} cmyk={cmyk} name={name} />
            <RgbComponent curColor={curColor} rgb={rgb} color={code} name={spell} />
        </div>
    );
};
export default Item;
