import { colors } from "../../configs";

const colorStyles: any = {};
Object.keys(colors).forEach((color) => {
    Object.keys(colors[color]).forEach((shade) => {
        colorStyles[`text_${color}_${shade}`] = {
            color: colors[color][shade],
        };
        colorStyles[`bg_${color}_${shade}`] = {
            backgroundColor: colors[color][shade],
        };
        colorStyles[`border_${color}_${shade}`] = {
            borderColor: colors[color][shade],
        };
        colorStyles[`shadow_${color}_${shade}`] = {
            shadowColor: colors[color][shade],
        };
    });
});

export { colorStyles };