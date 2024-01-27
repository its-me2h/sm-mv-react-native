// 411.43 designer screen width (pixel 7 pro)
// 867.43 designer screen height (pixel 7 pro)
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const scaleFactor = 1;
const rem = (width / 1920) * scaleFactor;
// const rem = 1;

export {
    width,
    height,
    rem
};
