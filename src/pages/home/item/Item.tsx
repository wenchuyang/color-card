/*
 * FileName: 单个色卡组件
 * Created Date: 2022-12-15 22:33:06
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-02 15:31:14
 * Modified By: 文初阳
 */
import React, { useEffect, useMemo, useRef } from "react";
import style from "./Item.module.scss";

import ProgressBar from "progressbar.js";
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
    const curColor = useMemo(() => true ? "#FFF" : code, []);
    
    return (
        <div className={style.wrapper}>
            <CmykComponent curColor={curColor} cmyk={cmyk} color={code} name={name} />
            <RgbComponent curColor={curColor} rgb={rgb} color={code} name={spell} />
            {/* <div className={style.inner}>
                <div className={style.rgb}>rgb</div>
                <div className={style.spell}>拼音</div>
            </div> */}
        </div>
    );
};
export default Item;
