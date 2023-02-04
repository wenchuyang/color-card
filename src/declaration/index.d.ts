/**
 * FileName: 声明文件
 * Created Date: 2022-12-15 17:26:55
 * Author: 文初阳
 * -----
 * Last Modified: 2023-02-04 18:51:47
 * Modified By: 文初阳
 */
/**
 * 添加 scss 文件的声明，解决 Cannot find module './Title.module.scss' or its corresponding type declarations 的报错
 */
declare module "*.scss" {
	const stylePreLoaderD: {readonly[className: string]: string} = { };
	export default stylePreLoaderD;
}

declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "color-rna";