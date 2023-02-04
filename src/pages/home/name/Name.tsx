/*
 * FileName: 颜色名称组件
 * Created Date: 2023-02-04 23:51:43
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-05 00:09:25
 * Modified By: 文初阳
 */
import React from "react";
import style from "./Name.module.scss";


interface IProps {
    name: string;
    spell: string;
}

const Name: React.FC<IProps> = ({name, spell}: IProps) => {
    
    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                {name}
            </div>
            <div className={style.spell}>
                {spell}
            </div> 
        </div>
    );
};
export default Name;
