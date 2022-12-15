/*
 * FileName: 
 * Created Date: 2022-12-15 14:03:51
 * Author: 文初阳
 * -----
 * Last Modified: 2022-12-15 22:12:28
 * Modified By: 文初阳
 */
import React from "react";
import style from "./Title.module.scss";
import logo from "../../../assets/imgs/logo.svg";

const Title: React.FC = () => {
    return <header className={style.wrapper}>
        <img src={logo} alt="logo" width="58px" />
        <h1 className={style.title}>中国传统色</h1>
    </header>;
};
export default Title;