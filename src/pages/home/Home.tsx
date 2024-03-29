/*
 * FileName: 主页
 * Created Date: 2022-12-14 13:15:10
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-06 16:10:36
 * Modified By: 文初阳
 */

import React, { useMemo, useState } from "react";
import style from "./Home.module.scss";
import Item from "./item/Item";
import Title from "./title/Title";
import { colors, TColor } from "../../constants/colors";
import Name from "./name/Name";
import Color from "./color/Color";


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
    const [curItem, setCurItem] = useState<TColor>(colors[Math.floor(Math.random() * 100)]);
    const rgbaB = useMemo(()=>`rgba(${curItem?.rgb?.toString() || "0,0,0"}, .9)`, [curItem]);
    return (
        <div className={style.wrapper} style={{background: rgbaB}}>
            <div className={style.title}>
                <Title />
            </div>
            <div className={style.name}>
                <Name name={curItem?.name || ""} spell={curItem?.spell || ""} />
            </div>
            <div className={style.color}>
                <Color cmyk={curItem?.cmyk || [0,0,0,0]} rgb={curItem?.rgb || [0,0,0]} />
            </div>
            <div className={style.itemsWrapper}>
                {colors.map((item, index) => 
                    <Item
                        key={index}
                        setCurItem={setCurItem}
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
