/*
 * FileName: 主页
 * Created Date: 2022-12-14 13:15:10
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-01 22:58:10
 * Modified By: 文初阳
 */

import React from "react";
import style from "./Home.module.scss";
import Item from "./item/Item";
import Title from "./title/Title";

const Home: React.FC = () => {
    return <>
        <div className={style.wrapper}>
            <div className={style.title}><Title /></div>    
            <Item cmyk={[20, 50, 10, 80]} code="#ccFFdA" name="胡说" spell="PinYin" rgb={[100, 20, 255]} />
        </div>
        
    </>
    ;
};
export default Home;
