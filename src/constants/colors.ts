/**
 * FileName: color 常量文件
 * Created Date: 2022-12-15 22:20:08
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-04 22:09:49
 * Modified By: 文初阳
 */

export type TColor = {
    name: string;
    code: string;
    spell?: string;
    cmyk?: [number, number, number, number];
    rgb?: [number, number, number];
    desc?: string;
};
export const colors: TColor[] = [
    {
        name: "精白",
        code: "#fff",
        spell: "jīng bái",
        cmyk: [0, 0, 0, 0],
        rgb: [255, 255, 255]
    },
    {
        name: "银白",
        code: "#e9e7ef",
        spell: "yín bái",
        cmyk: [3, 3, 0, 6],
        rgb: [233, 231, 239]
    },
    {
        name: "铅白",
        code: "#f0f0f4",
        spell: "qiān bái",
        cmyk: [2, 2, 0, 4],
        rgb: [240, 240, 244]
    },
    {
        name: "霜色",
        code: "#e9f1f6",
        spell: "shuāng sè",
        cmyk: [5, 1, 0, 4],
        rgb: [233, 241, 246]
    },
    {
        name: "雪白",
        code: "#f0fcff",
        spell: "xuě bái",
        cmyk: [6, 1, 0, 0],
        rgb: [240, 252, 255]
    },
    {
        name: "莹白",
        code: "#e3f9fd",
        spell: "yíng bái",
        cmyk: [10, 1, 0, 1],
        rgb: [227, 249, 253]
    },
    {
        name: "月白",
        code: "#d6ecf0",
        spell: "yuè bái",
        cmyk: [11, 1, 0, 6],
        rgb: [214, 236, 240]
    },
    {
        name: "象牙白",
        code: "#fffbf0",
        spell: "xiàng yá bái",
        cmyk: [0, 2, 6, 0],
        rgb: [255, 251, 240]
    },
    {
        name: "缟",
        code: "#f2ecde",
        spell: "gǎo",
        cmyk: [0, 2, 8, 5],
        rgb: [242, 236, 222]
    },
    {
        name: "鱼肚白",
        code: "#fcefe8",
        spell: "yú dù bái",
        cmyk: [0, 5, 8, 1],
        rgb: [252, 239, 232]
    },
    {
        name: "白粉",
        code: "#fff2df",
        spell: "bái fěn",
        cmyk: [0, 5, 13, 0],
        rgb: [255, 242, 223]
    },
    {
        name: "荼白",
        code: "#f3f9f1",
        spell: "tú bái",
        cmyk: [3, 0, 3, 2],
        rgb: [243, 249, 241]
    },
    {
        name: "鸭卵青",
        code: "#e0eee8",
        spell: "yā luǎn qīng",
        cmyk: [5, 0, 2, 7],
        rgb: [224, 238, 232]
    },
    {
        name: "素",
        code: "#e0f0e9",
        spell: "sù",
        cmyk: [6, 0, 3, 6],
        rgb: [224, 240, 233]
    },
    {
        name: "青白",
        code: "#c0ebd7",
        spell: "qīng bái",
        cmyk: [18, 0, 9, 8],
        rgb: [192, 235, 215]
    },
    {
        name: "蟹壳青",
        code: "#bbcdc5",
        spell: "xiè ké qīng",
        cmyk: [9, 0, 4, 20],
        rgb: [187, 205, 197]
    },
    {
        name: "花白",
        code: "#c2ccd0",
        spell: "huā bái",
        cmyk: [7, 2, 0, 18],
        rgb: [194, 204, 208]
    },
    {
        name: "老银",
        code: "#bacac6",
        spell: "lǎo yín",
        cmyk: [8, 0, 1, 21],
        rgb: [186, 202, 198]
    },
    {
        name: "灰色",
        code: "#808080",
        spell: "huī sè",
        cmyk: [0, 0, 0, 50],
        rgb: [128, 128, 128]
    },
    {
        name: "苍色",
        code: "#75878a",
        spell: "cāng sè",
        cmyk: [15, 2, 0, 46],
        rgb: [117, 135, 138]
    },
    {
        name: "水色",
        code: "#88ada6",
        spell: "shuǐ sè",
        cmyk: [22, 0, 4, 32],
        rgb: [136, 173, 166]
    },
    {
        name: "黝",
        code: "#6b6882",
        spell: "yǒu",
        cmyk: [18, 20, 0, 49],
        rgb: [107, 104, 130]
    },
    {
        name: "乌色",
        code: "#725e82",
        spell: "wū sè",
        cmyk: [12, 27, 0, 49],
        rgb: [114, 94, 130]
    },
    {
        name: "玄青",
        code: "#3d3b4f",
        spell: "xuán qīng",
        cmyk: [23, 26, 0, 69],
        rgb: [61, 59, 79]
    },
    {
        name: "乌黑",
        code: "#392f41",
        spell: "wū hēi",
        cmyk: [12, 28, 0, 75],
        rgb: [57, 47, 65]
    },
    {
        name: "黎",
        code: "#75664d",
        spell: "lí",
        cmyk: [0, 13, 35, 54],
        rgb: [117, 102, 77]
    },
    {
        name: "黧",
        code: "#5d513c",
        spell: "lí",
        cmyk: [0, 11, 33, 64],
        rgb: [93, 81, 60]
    },
    {
        name: "黝黑",
        code: "#665757",
        spell: "yǒu hēi",
        cmyk: [0, 15, 15, 60],
        rgb: [102, 87, 87]
    },
    {
        name: "缁色",
        code: "#493131",
        spell: "zī sè",
        cmyk: [0, 34, 34, 71],
        rgb: [73, 49, 49]
    },
    {
        name: "煤黑",
        code: "#312520",
        spell: "méi hēi",
        cmyk: [0, 21, 32, 81],
        rgb: [49, 37, 32]
    },
    {
        name: "漆黑",
        code: "#161823",
        spell: "qī hēi",
        cmyk: [36, 36, 0, 86],
        rgb: [22, 24, 35]
    },
    {
        name: "黑色",
        code: "#000000",
        spell: "hēi sè",
        cmyk: [0, 0, 0, 100],
        rgb: [0, 0, 0]
    },
    {
        name: "樱草色",
        code: "#eaff56",
        spell: "yīng cǎo sè",
        cmyk: [8, 0, 66, 0],
        rgb: [234, 255, 86]
    },
    {
        name: "鹅黄",
        code: "#fff143",
        spell: "é huáng",
        cmyk: [0, 5, 74, 0],
        rgb: [255, 241, 67]
    },
    {
        name: "鸭黄",
        code: "#faff72",
        spell: "yā huáng",
        cmyk: [2, 0, 55, 0],
        rgb: [250, 255, 114]
    },
    {
        name: "杏黄",
        code: "#ffa631",
        spell: "xìng huáng",
        cmyk: [0, 35, 81, 0],
        rgb: [255, 166, 49]
    },
    {
        name: "橙黄",
        code: "#ffa400",
        spell: "chéng huáng",
        cmyk: [0, 36, 100, 0],
        rgb: [255, 164, 0]
    },
    {
        name: "橙色",
        code: "#fa8c35",
        spell: "chéng sè",
        cmyk: [0, 44, 79, 2],
        rgb: [250, 140, 53]
    },
    {
        name: "杏红",
        code: "#ff8c31",
        spell: "xìng hóng",
        cmyk: [0, 45, 81, 0],
        rgb: [255, 140, 49]
    },
    {
        name: "橘黄",
        code: "#ff8936",
        spell: "jú huáng",
        cmyk: [0, 46, 79, 0],
        rgb: [255, 137, 54]
    },
    {
        name: "橘红",
        code: "#ff7500",
        spell: "jú hóng",
        cmyk: [0, 54, 100, 0],
        rgb: [255, 117, 0]
    },
    {
        name: "藤黄",
        code: "#ffb61e",
        spell: "téng huáng",
        cmyk: [0, 29, 88, 0],
        rgb: [255, 182, 30]
    },
    {
        name: "姜黄",
        code: "#ffc773",
        spell: "jiāng huáng",
        cmyk: [0, 22, 55, 0],
        rgb: [255, 199, 115]
    },
    {
        name: "雌黄",
        code: "#ffc64b",
        spell: "cí huáng",
        cmyk: [0, 22, 71, 0],
        rgb: [255, 198, 75]
    },
    {
        name: "赤金",
        code: "#f2be45",
        spell: "chì jīn",
        cmyk: [0, 21, 72, 5],
        rgb: [242, 190, 69]
    },
    {
        name: "缃色",
        code: "#f0c239",
        spell: "xiāng sè",
        cmyk: [0, 19, 77, 6],
        rgb: [240, 194, 57]
    },
    {
        name: "雄黄",
        code: "#e9bb1d",
        spell: "xióng huáng",
        cmyk: [0, 20, 88, 9],
        rgb: [233, 187, 29]
    },
    {
        name: "秋香色",
        code: "#d9b611",
        spell: "qiū xiāng sè",
        cmyk: [0, 16, 92, 15],
        rgb: [217, 182, 17]
    },
    {
        name: "金色",
        code: "#eacd76",
        spell: "jīn sè",
        cmyk: [0, 13, 50, 8],
        rgb: [234, 205, 118]
    },
    {
        name: "牙色",
        code: "#eedeb0",
        spell: "yá sè",
        cmyk: [0, 6, 26, 7],
        rgb: [238, 222, 176]
    },
    {
        name: "枯黄",
        code: "#d3b17d",
        spell: "kū huáng",
        cmyk: [0, 17, 41, 17],
        rgb: [211, 177, 125]
    },
    {
        name: "黄栌",
        code: "#e29c45",
        spell: "huáng lú",
        cmyk: [0, 31, 70, 11],
        rgb: [226, 156, 69]
    },
    {
        name: "乌金",
        code: "#a78e44",
        spell: "wū jīn",
        cmyk: [0, 14, 58, 35],
        rgb: [167, 142, 68]
    },
    {
        name: "昏黄",
        code: "#c89b40",
        spell: "hūn huáng",
        cmyk: [0, 22, 68, 22],
        rgb: [200, 155, 64]
    },
    {
        name: "棕黄",
        code: "#ae7000",
        spell: "zōng huáng",
        cmyk: [0, 35, 100, 32],
        rgb: [174, 112, 0]
    },
    {
        name: "琥珀",
        code: "#ca6924",
        spell: "hǔ pò",
        cmyk: [0, 48, 82, 21],
        rgb: [202, 105, 36]
    },
    {
        name: "棕色",
        code: "#b25d25",
        spell: "zōng sè",
        cmyk: [0, 49, 79, 30],
        rgb: [178, 93, 37]
    },
    {
        name: "茶色",
        code: "#b35c44",
        spell: "chá sè",
        cmyk: [0, 49, 61, 30],
        rgb: [179, 92, 68]
    },
    {
        name: "棕红",
        code: "#9b4400",
        spell: "zōng hóng",
        cmyk: [0, 56, 100, 39],
        rgb: [155, 68, 0]
    },
    {
        name: "赭",
        code: "#9c5333",
        spell: "zhě",
        cmyk: [0, 46, 67, 39],
        rgb: [156, 83, 51]
    },
    {
        name: "松花色",
        code: "#bce672",
        spell: "sōng huā sè",
        cmyk: [18, 0, 50, 10],
        rgb: [188, 230, 114]
    },
    {
        name: "柳黄",
        code: "#c9dd22",
        spell: "liǔ huáng",
        cmyk: [9, 0, 85, 13],
        rgb: [201, 221, 34]
    },
    {
        name: "嫩绿",
        code: "#bddd22",
        spell: "nèn lǜ",
        cmyk: [15, 0, 85, 13],
        rgb: [189, 221, 34]
    },
    {
        name: "柳绿",
        code: "#afdd22",
        spell: "liǔ lǜ",
        cmyk: [21, 0, 85, 13],
        rgb: [175, 221, 34]
    },
    {
        name: "葱黄",
        code: "#a3d900",
        spell: "cōng huáng",
        cmyk: [25, 0, 100, 15],
        rgb: [163, 217, 0]
    },
    {
        name: "葱绿",
        code: "#9ed900",
        spell: "cōng lǜ",
        cmyk: [27, 0, 100, 15],
        rgb: [158, 217, 0]
    },
    {
        name: "豆绿",
        code: "#9ed048",
        spell: "dòu lǜ",
        cmyk: [24, 0, 66, 18],
        rgb: [158, 208, 72]
    },
    {
        name: "豆青",
        code: "#96ce54",
        spell: "dòu qīng",
        cmyk: [27, 0, 59, 19],
        rgb: [150, 206, 84]
    },
    {
        name: "油绿",
        code: "#00bc12",
        spell: "yóu lǜ",
        cmyk: [100, 0, 91, 26],
        rgb: [0, 188, 18]
    },
    {
        name: "葱倩",
        code: "#0eb83a",
        spell: "cōng qiàn",
        cmyk: [93, 0, 68, 28],
        rgb: [14, 184, 58]
    },
    {
        name: "葱青",
        code: "#0eb83a",
        spell: "cōng qīng",
        cmyk: [93, 0, 68, 28],
        rgb: [14, 184, 58]
    },
    {
        name: "青葱",
        code: "#0aa344",
        spell: "qīng cōng",
        cmyk: [94, 0, 58, 36],
        rgb: [10, 163, 68]
    },
    {
        name: "石绿",
        code: "#16a951",
        spell: "shí lǜ",
        cmyk: [86, 0, 52, 34],
        rgb: [22, 169, 81]
    },
    {
        name: "松柏绿",
        code: "#21a675",
        spell: "sōng bǎi lǜ",
        cmyk: [80, 0, 29, 35],
        rgb: [33, 166, 117]
    },
    {
        name: "松花绿",
        code: "#057748",
        spell: "sōng huā lǜ",
        cmyk: [96, 0, 40, 53],
        rgb: [5, 119, 72]
    },
    {
        name: "绿沈",
        code: "#0c8918",
        spell: "lǜ shěn",
        cmyk: [91, 0, 83, 46],
        rgb: [12, 137, 24]
    },
    {
        name: "绿色",
        code: "#00e500",
        spell: "lǜ sè",
        cmyk: [100, 0, 100, 10],
        rgb: [0, 229, 0]
    },
    {
        name: "草绿",
        code: "#40de5a",
        spell: "cǎo lǜ",
        cmyk: [71, 0, 60, 13],
        rgb: [64, 222, 90]
    },
    {
        name: "青翠",
        code: "#00e079",
        spell: "qīng cuì",
        cmyk: [100, 0, 47, 12],
        rgb: [0, 224, 121]
    },
    {
        name: "青色",
        code: "#00e09e",
        spell: "qīng sè",
        cmyk: [100, 0, 30, 12],
        rgb: [0, 224, 158]
    },
    {
        name: "翡翠色",
        code: "#3de1ad",
        spell: "fěi cuì sè",
        cmyk: [73, 0, 23, 12],
        rgb: [61, 225, 173]
    },
    {
        name: "碧绿",
        code: "#2add9c",
        spell: "bì lǜ",
        cmyk: [82, 0, 30, 13],
        rgb: [42, 221, 156]
    },
    {
        name: "玉色",
        code: "#2edfa3",
        spell: "yù sè",
        cmyk: [79, 0, 26, 13],
        rgb: [46, 223, 163]
    },
    {
        name: "缥",
        code: "#7fecad",
        spell: "piǎo",
        cmyk: [46, 0, 27, 7],
        rgb: [127, 236, 173]
    },
    {
        name: "艾绿",
        code: "#a4e2c6",
        spell: "ài lǜ",
        cmyk: [28, 0, 12, 11],
        rgb: [164, 226, 198]
    },
    {
        name: "石青",
        code: "#7bcfa6",
        spell: "shí qīng",
        cmyk: [41, 0, 20, 19],
        rgb: [123, 207, 166]
    },
    {
        name: "碧色",
        code: "#1bd1a5",
        spell: "bì sè",
        cmyk: [87, 0, 21, 18],
        rgb: [27, 209, 165]
    },
    {
        name: "青碧",
        code: "#48c0a3",
        spell: "qīng bì",
        cmyk: [63, 0, 15, 25],
        rgb: [72, 192, 163]
    },
    {
        name: "铜绿",
        code: "#549688",
        spell: "tóng lǜ",
        cmyk: [44, 0, 10, 41],
        rgb: [84, 150, 136]
    },
    {
        name: "竹青",
        code: "#789262",
        spell: "zhú qīng",
        cmyk: [18, 0, 33, 43],
        rgb: [120, 146, 98]
    },
    {
        name: "墨灰",
        code: "#758a99",
        spell: "mò huī",
        cmyk: [23, 10, 0, 40],
        rgb: [117, 138, 153]
    },
    {
        name: "墨色",
        code: "#50616d",
        spell: "mò sè",
        cmyk: [28, 12, 0, 57],
        rgb: [80, 97, 109]
    },
    {
        name: "鸦青",
        code: "#424c50",
        spell: "yā qīng",
        cmyk: [16, 3, 0, 69],
        rgb: [66, 76, 80]
    },
    {
        name: "黯",
        code: "#41555d",
        spell: "àn",
        cmyk: [31, 8, 0, 64],
        rgb: [65, 85, 93]
    },
    {
        name: "朱砂",
        code: "#ff461f",
        spell: "zhū shā",
        cmyk: [0, 73, 88, 0],
        rgb: [255, 70, 31]
    },
    {
        name: "火红",
        code: "#ff2d51",
        spell: "huǒ hóng",
        cmyk: [0, 82, 68, 0],
        rgb: [255, 45, 81]
    },
    {
        name: "朱膘",
        code: "#f36838",
        spell: "zhū biāo",
        cmyk: [0, 57, 77, 5],
        rgb: [243, 104, 56]
    },
    {
        name: "妃色",
        code: "#ed5736",
        spell: "fēi sè",
        cmyk: [0, 63, 77, 7],
        rgb: [237, 87, 54]
    },
    {
        name: "洋红",
        code: "#ff4777",
        spell: "yáng hóng",
        cmyk: [0, 72, 53, 0],
        rgb: [255, 71, 119]
    },
    {
        name: "品红",
        code: "#f00056",
        spell: "pǐn hóng",
        cmyk: [0, 100, 64, 6],
        rgb: [240, 0, 86]
    },
    {
        name: "粉红",
        code: "#ffb3a7",
        spell: "fěn hóng",
        cmyk: [0, 30, 35, 0],
        rgb: [255, 179, 167]
    },
    {
        name: "桃红",
        code: "#f47983",
        spell: "táo hóng",
        cmyk: [0, 51, 47, 4],
        rgb: [244, 121, 131]
    },
    {
        name: "海棠红",
        code: "#db5a6b",
        spell: "hǎi táng hóng",
        cmyk: [0, 59, 51, 14],
        rgb: [219, 90, 107]
    },
    {
        name: "樱桃色",
        code: "#c93756",
        spell: "yīng táo sè",
        cmyk: [0, 72, 57, 21],
        rgb: [201, 55, 86]
    },
    {
        name: "酡颜",
        code: "#f9906f",
        spell: "tuó yán",
        cmyk: [0, 43, 55, 2],
        rgb: [249, 144, 111]
    },
    {
        name: "银红",
        code: "#f05654",
        spell: "yín hóng",
        cmyk: [0, 64, 65, 6],
        rgb: [240, 86, 84]
    },
    {
        name: "大红",
        code: "#ff2121",
        spell: "dà hóng",
        cmyk: [0, 87, 87, 0],
        rgb: [255, 33, 33]
    },
    {
        name: "石榴红",
        code: "#f20c00",
        spell: "shí liú hóng",
        cmyk: [0, 95, 100, 5],
        rgb: [242, 12, 0]
    },
    {
        name: "绛紫",
        code: "#8c4356",
        spell: "jiàng zǐ",
        cmyk: [0, 53, 38, 45],
        rgb: [140, 67, 86]
    },
    {
        name: "绯红",
        code: "#c83c23",
        spell: "fēi hóng",
        cmyk: [0, 69, 82, 22],
        rgb: [200, 60, 35]
    },
    {
        name: "胭脂",
        code: "#9d2933",
        spell: "yān zhī",
        cmyk: [0, 74, 68, 38],
        rgb: [157, 41, 51]
    },
    {
        name: "朱红",
        code: "#ff4c00",
        spell: "zhū hóng",
        cmyk: [0, 70, 100, 0],
        rgb: [255, 76, 0]
    },
    {
        name: "丹",
        code: "#ff4e20",
        spell: "dān",
        cmyk: [0, 69, 87, 0],
        rgb: [255, 78, 32]
    },
    {
        name: "彤",
        code: "#f35336",
        spell: "tóng",
        cmyk: [0, 65, 78, 5],
        rgb: [243, 83, 54]
    },
    {
        name: "酡红",
        code: "#dc3023",
        spell: "tuó hóng",
        cmyk: [0, 78, 84, 14],
        rgb: [220, 48, 35]
    },
    {
        name: "炎",
        code: "#ff3300",
        spell: "yán",
        cmyk: [0, 80, 100, 0],
        rgb: [255, 51, 0]
    },
    {
        name: "茜色",
        code: "#cb3a56",
        spell: "qiàn sè",
        cmyk: [0, 71, 57, 20],
        rgb: [203, 58, 86]
    },
    {
        name: "绾",
        code: "#a98175",
        spell: "wǎn",
        cmyk: [0, 23, 30, 34],
        rgb: [169, 129, 117]
    },
    {
        name: "檀",
        code: "#b36d61",
        spell: "tán",
        cmyk: [0, 39, 46, 30],
        rgb: [179, 109, 97]
    },
    {
        name: "嫣红",
        code: "#ef7a82",
        spell: "yān hóng",
        cmyk: [0, 49, 46, 6],
        rgb: [239, 122, 130]
    },
    {
        name: "洋红",
        code: "#ff0097",
        spell: "yáng hóng",
        cmyk: [0, 100, 41, 0],
        rgb: [255, 0, 151]
    },
    {
        name: "枣红",
        code: "#c32136",
        spell: "zǎo hóng",
        cmyk: [0, 83, 72, 24],
        rgb: [195, 33, 54]
    },
    {
        name: "殷红",
        code: "#be002f",
        spell: "yīn hóng",
        cmyk: [0, 100, 76, 25],
        rgb: [190, 0, 47]
    },
    {
        name: "赫赤",
        code: "#c91f37",
        spell: "hè chì",
        cmyk: [0, 85, 72, 21],
        rgb: [201, 31, 55]
    },
    {
        name: "银朱",
        code: "#bf242a",
        spell: "yín zhū",
        cmyk: [0, 81, 79, 25],
        rgb: [191, 36, 42]
    },
    {
        name: "赤",
        code: "#c3272b",
        spell: "chì",
        cmyk: [0, 80, 78, 24],
        rgb: [195, 39, 43]
    },
    {
        name: "胭脂",
        code: "#9d2933",
        spell: "yān zhī",
        cmyk: [0, 74, 68, 38],
        rgb: [157, 41, 51]
    },
    {
        name: "蔚蓝",
        code: "#70f3ff",
        spell: "wèi lán",
        cmyk: [56, 5, 0, 0],
        rgb: [112, 243, 255]
    },
    {
        name: "蓝",
        code: "#44cef6",
        spell: "lán",
        cmyk: [72, 16, 0, 4],
        rgb: [68, 206, 246]
    },
    {
        name: "碧蓝",
        code: "#3eede7",
        spell: "bì lán",
        cmyk: [74, 0, 2, 7],
        rgb: [62, 237, 231]
    },
    {
        name: "石青",
        code: "#1685a9",
        spell: "shí qīng",
        cmyk: [86, 21, 0, 34],
        rgb: [22, 133, 169]
    },
    {
        name: "靛青",
        code: "#177cb0",
        spell: "diàn qīng",
        cmyk: [87, 29, 0, 31],
        rgb: [23, 124, 176]
    },
    {
        name: "靛蓝",
        code: "#065279",
        spell: "diàn lán",
        cmyk: [96, 32, 0, 53],
        rgb: [6, 82, 121]
    },
    {
        name: "花青",
        code: "#003472",
        spell: "huā qīng",
        cmyk: [100, 56, 0, 55],
        rgb: [0, 52, 114]
    },
    {
        name: "宝蓝",
        code: "#4b5cc4",
        spell: "bǎo lán",
        cmyk: [62, 53, 0, 23],
        rgb: [75, 92, 196]
    },
    {
        name: "蓝灰色",
        code: "#a1afc9",
        spell: "lán huī sè",
        cmyk: [20, 13, 0, 21],
        rgb: [161, 175, 201]
    },
    {
        name: "藏青",
        code: "#2e4e7e",
        spell: "cáng qīng",
        cmyk: [63, 37, 0, 51],
        rgb: [46, 78, 126]
    },
    {
        name: "藏蓝",
        code: "#3b2e7e",
        spell: "cáng lán",
        cmyk: [53, 63, 0, 51],
        rgb: [59, 46, 126]
    },
    {
        name: "黛",
        code: "#4a4266",
        spell: "dài",
        cmyk: [27, 35, 0, 60],
        rgb: [74, 66, 102]
    },
    {
        name: "黛绿",
        code: "#426666",
        spell: "dài lǜ",
        cmyk: [35, 0, 0, 60],
        rgb: [66, 102, 102]
    },
    {
        name: "黛蓝",
        code: "#425066",
        spell: "dài lán",
        cmyk: [35, 22, 0, 60],
        rgb: [66, 80, 102]
    },
    {
        name: "黛紫",
        code: "#574266",
        spell: "dài zǐ",
        cmyk: [15, 35, 0, 60],
        rgb: [87, 66, 102]
    },
    {
        name: "紫色",
        code: "#8d4bbb",
        spell: "zǐ sè",
        cmyk: [25, 60, 0, 27],
        rgb: [141, 75, 187]
    },
    {
        name: "紫酱",
        code: "#815463",
        spell: "zǐ jiàng",
        cmyk: [0, 35, 24, 49],
        rgb: [129, 84, 99]
    },
    {
        name: "酱紫",
        code: "#815476",
        spell: "jiàng zǐ",
        cmyk: [0, 35, 10, 49],
        rgb: [129, 84, 118]
    },
    {
        name: "紫檀",
        code: "#4c221b",
        spell: "zǐ tán",
        cmyk: [0, 57, 63, 70],
        rgb: [76, 34, 27]
    },
    {
        name: "绀青",
        code: "#003371",
        spell: "gàn qīng",
        cmyk: [100, 55, 0, 56],
        rgb: [0, 51, 113]
    },
    {
        name: "紫棠",
        code: "#56004f",
        spell: "zǐ táng",
        cmyk: [0, 100, 9, 66],
        rgb: [86, 0, 79]
    },
    {
        name: "青莲",
        code: "#801dae",
        spell: "qīng lián",
        cmyk: [26, 84, 0, 32],
        rgb: [128, 29, 174]
    },
    {
        name: "群青",
        code: "#4c8dae",
        spell: "qún qīng",
        cmyk: [56, 19, 0, 32],
        rgb: [76, 141, 174]
    },
    {
        name: "雪青",
        code: "#b0a4e3",
        spell: "xuě qīng",
        cmyk: [22, 28, 0, 11],
        rgb: [176, 164, 227]
    },
    {
        name: "丁香色",
        code: "#cca4e3",
        spell: "dīng xiāng sè",
        cmyk: [10, 28, 0, 11],
        rgb: [204, 164, 227]
    },
    {
        name: "藕色",
        code: "#edd1d8",
        spell: "ǒu sè",
        cmyk: [0, 12, 9, 7],
        rgb: [237, 209, 216]
    },
    {
        name: "藕荷色",
        code: "#e4c6d0",
        spell: "ǒu hé sè",
        cmyk: [0, 12, 8, 11],
        rgb: [228, 198, 208]
    },
    {
        name: "驼色",
        code: "#a88462",
        spell: "tuó sè",
        cmyk: [0, 21, 42, 34],
        rgb: [168, 132, 98]
    },
    {
        name: "秋色",
        code: "#896c39",
        spell: "qiū sè",
        cmyk: [0, 22, 59, 46],
        rgb: [137, 108, 57]
    },
    {
        name: "棕绿",
        code: "#827100",
        spell: "zōng lǜ",
        cmyk: [0, 14, 100, 49],
        rgb: [130, 113, 0]
    },
    {
        name: "褐色",
        code: "#6e511e",
        spell: "hè sè",
        cmyk: [0, 26, 72, 57],
        rgb: [110, 81, 30]
    },
    {
        name: "棕黑",
        code: "#7c4b00",
        spell: "zōng hēi",
        cmyk: [0, 41, 100, 51],
        rgb: [124, 75, 0]
    },
    {
        name: "赭色",
        code: "#955539",
        spell: "zhě sè",
        cmyk: [0, 43, 62, 42],
        rgb: [149, 85, 57]
    },
    {
        name: "赭石",
        code: "#845a33",
        spell: "zhě shí",
        cmyk: [0, 33, 62, 48],
        rgb: [132, 90, 51]
    },
    {
        name: "栗色",
        code: "#60281e",
        spell: "lì sè",
        cmyk: [0, 58, 68, 62],
        rgb: [96, 40, 30]
    },
    {
        name: "玄色",
        code: "#622a1d",
        spell: "xuán sè",
        cmyk: [0, 58, 71, 62],
        rgb: [98, 42, 29]
    }
];
