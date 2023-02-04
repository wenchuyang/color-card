/*
 * FileName: 单个 item 的 RGB 展示
 * Created Date: 2023-02-01 15:33:29
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-04 22:28:24
 * Modified By: 文初阳
 */
import React from "react";
import style from "./Rgb.module.scss";

interface IProps {
    rgb: [number, number, number]; // RGB 的数值
    color: string; // 颜色代码
    name: string; // 颜色拼音
    curColor: string; // 当前展示的样式颜色
}

const RgbComponent: React.FC<IProps> = ({ rgb, color, curColor, name }: IProps) => {
    const [redNum, greenNum, blueNum] = rgb;

    return (
        <div className={style.inner}>
            <div className={style.rgbWrapper}>
                <div className={style.rgb}>
                    <div className={style.line}>
                        <div
                            className={style.innerLine}
                            style={{
                                height: `${redNum / 255 * 100}%`,
                                backgroundColor: curColor
                            }}></div>
                    </div>
                    <div className={style.line}>
                        <div
                            className={style.innerLine}
                            style={{
                                height: `${greenNum / 255 * 100}%`,
                                backgroundColor: curColor
                            }}></div>
                    </div>
                    <div className={style.line}>
                        <div
                            className={style.innerLine}
                            style={{
                                height: `${blueNum / 255 * 100}%`,
                                backgroundColor: curColor
                            }}></div>
                    </div>
                </div>
                <div className={style.code} style={{ color: curColor }}>
                    {String(color).toUpperCase()}
                </div>
            </div>
            <div className={style.name} style={{ color: curColor }}>
                {String(name)}
            </div>
        </div>
    );
};
export default RgbComponent;
