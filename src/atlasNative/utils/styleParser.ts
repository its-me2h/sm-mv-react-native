
import { width } from "../configs/dimensions";
import { styleGenerator } from "./styles/styleGenerator";
import { styles } from "./styles/styleSheet";

export default function parseStyles(className: string) {
    const classNames = className.split(' ');

    const filteredClassNames = classNames
        .map((classToken: any) => getResponsiveClass(classToken))
        .filter(Boolean);

    const classNamesToStyles = filteredClassNames
        .map((classToken: any) => getStyleValue(classToken))
        .filter(Boolean);

    return classNamesToStyles;
}

function getResponsiveClass(className: string) {
    if (className === 'undefined') {
        return null;
    }
    if (className.includes(':')) {
        const [breakPoint, responsiveClass] = className.split(':');
        return width < parseInt(breakPoint) ? responsiveClass : null;
    }
    return className;
};

function getStyleValue(className: string) {
    return styles[styleGenerator(className)!.replace(/-/g, '_')];
};