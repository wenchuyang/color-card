/*
 * FileName: 主页
 * Created Date: 2022-12-14 13:15:10
 * Author: 文初阳
 * -----
 * Last Modified: 2022-12-15 18:09:06
 * Modified By: 文初阳
 */

import React from "react";
import style from "./Home.module.scss";
import Title from "./title/Title";

const Home: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}><Title /></div>
        </div>
    );
};
export default Home;
