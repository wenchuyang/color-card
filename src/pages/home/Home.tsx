/*
 * FileName: 主页
 * Created Date: 2022-12-14 13:15:10
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-04 23:47:13
 * Modified By: 文初阳
 */

import React, { useMemo, useState } from "react";
import style from "./Home.module.scss";
import Item from "./item/Item";
import Title from "./title/Title";
import { colors } from "../../constants/colors";


const Home: React.FC = () => {
    // useEffect(() => {
    //     const res: TColor[] = [];
    //     colors.forEach(item => {
    //         const spell = pinyin(item.name).flat().join(" ");
    //         const color = new ColorRNA(item.code);
    //         const rgb = color.rgb();
    //         const cmyk = color.CMYK();
    //         res.push({
    //             name: item.name,
    //             code: item.code,
    //             spell,
    //             cmyk,
    //             rgb
    //         });
    //     });
    //     console.log(JSON.stringify(res));
    // },[]);
    const [bgColor, setBgColor] = useState([234, 255, 86]);
    // const rgbaT = useMemo(()=>`rgba(${bgColor.toString()}, 1)`, [bgColor]);
    const rgbaB = useMemo(()=>`rgba(${bgColor.toString()}, .9)`, [bgColor]);
    // const borderWidth = useMemo(()=>bgColor[0], [bgColor]);
    console.log("重新 render 了");
    return (
        <div className={style.wrapper} style={{background: rgbaB}}>
            <div className={style.title}>
                <Title />
            </div>
            <div className={style.itemsWrapper}>
                {colors.map((item, index) => 
                    <Item
                        key={index}
                        setColor={setBgColor}
                        cmyk={item.cmyk || [0, 0, 0, 0]}
                        code={item.code}
                        name={item.name}
                        spell={item.spell || "hēi sè"}
                        rgb={item.rgb || [0, 0, 0]}
                    />
                )}
            </div>
        </div>
    );
};
export default Home;
