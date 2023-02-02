/**
 * FileName: color 常量文件
 * Created Date: 2022-12-15 22:20:08
 * Author: 文初阳
 * -----
 * Last Modified: 2022-12-15 22:29:03
 * Modified By: 文初阳
 */

type TColor = {
    [key: string]: {
        name: string;
        code: string;
        pinyin?: string;
        CMYK?: {c: number; m: number; y: number; k: number};
        RGB?: {r: number; g: number; b: number}
        desc?: string;
    }
}
export const colors: TColor = {
    "#000000": {
        name: "黑色",
        code: "#000000",
        desc:
        "亮度最低的非彩色的或消色差的物体的颜色；最暗的灰色；与白色截然不同的消色差的颜色；被认为特别属于那些既不能反射、又不能透过能使人感觉到的微小入射光的物体,任何亮度很低的物体颜色。"
    },
    "#ED5736": {
        name: "妃色",
        code: "#ED5736",
        desc: "古同“绯”，粉红色。杨妃色 湘妃色 粉红皆同义。"
    },
    "#F05654": {
        name: "银红",
        code: "#F05654",
        desc:
        "银朱和粉红色颜料配成的颜色。多用来形容有光泽的各种红色，尤指有光泽浅红。"
    },
    "#FF4C00": {
        name: "朱红",
        code: "#FF4C00",
        desc: "朱砂的颜色，比大红活泼，也称铅朱 朱色 丹色 "
    },
    "#CB3A56": {
        name: "茜色",
        code: "#CB3A56",
        desc: "茜草染的色彩，呈深红色"
    },
    "#FFA631": {
        name: "杏黄",
        code: "#FFA631",
        desc: "成熟杏子的黄色"
    },
    "#FF7500": {
        name: "橘红",
        code: "#FF7500",
        desc: "柑橘皮所呈现的红色。"
    },
    "#CA6924": {
        name: "琥珀",
        code: "#CA6924",
        desc: "琥珀色"
    },
    "#BDDD22": {
        name: "嫩绿",
        code: "#BDDD22",
        desc: "刚长出的嫩叶的浅绿色"
    }
};