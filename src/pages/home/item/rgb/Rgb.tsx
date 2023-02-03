/*
 * FileName: 单个 item 的 RGB 展示
 * Created Date: 2023-02-01 15:33:29
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-02 15:32:32
 * Modified By: 文初阳
 */
import React from "react";
import style from "./Rgb.module.scss";

interface IProps {
    rgb: [number, number, number];
    color: string;
    name: string;
    curColor: string;
}

const RgbComponent: React.FC<IProps> = ({rgb, color, curColor, name}: IProps) => {
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
                            }}>
                        </div>
                    </div>
                    <div className={style.line}>
                        <div 
                            className={style.innerLine}
                            style={{
                                height: `${greenNum / 255 * 100}%`,
                                backgroundColor: curColor
                            }}>
                        </div>
                    </div>
                    <div className={style.line}>
                        <div 
                            className={style.innerLine}
                            style={{
                                height: `${blueNum / 255 * 100}%`,
                                backgroundColor: curColor
                            }}>
                        </div>
                    </div>
                </div>
                <div className={style.code}>{String(color).toUpperCase()}</div>
            </div>
            
            <div className={style.name}>{String(name).toUpperCase()}</div>
        </div>
    );
};
export default RgbComponent;