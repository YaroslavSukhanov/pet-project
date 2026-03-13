declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
    import React, { JSX } from "react";
    const SVG: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    export default SVG;
}
