import { height, rem, width } from '../../configs/dimensions';
import { sizesAbbr, sizesConfig } from '../../configs';
import { styles } from './styleSheet';

function styleGenerator(className: string) {
    if (!styles[className.replace(/-/g, '_')]) {
        const splitValues = className.split('-');
        let name, value;
        if (splitValues.length === 2) {
            name = splitValues[0];
            value = splitValues[1];
        } else if (splitValues.length === 3) {
            name = `${splitValues[0]}_${splitValues[1]}`;
            value = splitValues[2];
        } else {
            console.error('Unexpected number of values in className:', className);
            return null;
        }

        // console.log(name)

        const property = sizesAbbr[name];


        if (property) {
            const generatedStyle: any = {};
            // Part 1: Sizing
            if (sizesConfig[value]) {
                generatedStyle[property] = sizesConfig[value];
            } else if (className.endsWith('%')) {
                generatedStyle[property] = `${value}`;
            } else if (className.endsWith('w')) {
                generatedStyle[property] = (parseInt(value) * width) / 100;
            } else if (className.endsWith('h')) {
                generatedStyle[property] = (parseInt(value) * height) / 100;
            } else {
                if (name === 'flex' || name === 'z') {
                    generatedStyle[property] = parseInt(value);
                } else {
                    generatedStyle[property] = parseInt(value) * rem;
                }
            }
            styles[`${name}_${value}`] = generatedStyle;
        } else {
            console.log(`Class '${className}' not generated. Check sizesAbbr array.`);
        }
    }
    return className;
}


export { styleGenerator };


// CONDITIONS TO ADD
// if flex do not use rem or scaleFactors
// fix max-x- and min-x- and all classes have  - -