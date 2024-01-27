import { StyleSheet } from 'react-native';
import { colorStyles } from './colorStyles';

const baseStyles = {
    // Display
    flex: {
        display: 'flex',
    },
    hidden: {
        display: 'none',
    },
    // Flex Direction
    flex_row: {
        flexDirection: 'row',
    },
    flex_row_reverse: {
        flexDirection: 'row-reverse',
    },
    flex_col: {
        flexDirection: 'column',
    },
    flex_col_reverse: {
        flexDirection: 'column-reverse',
    },
    // Justify Content
    justify_start: {
        justifyContent: 'flex-start',
    },
    justify_end: {
        justifyContent: 'flex-end',
    },
    justify_center: {
        justifyContent: 'center',
    },
    justify_between: {
        justifyContent: 'space-between',
    },
    justify_around: {
        justifyContent: 'space-around',
    },
    justify_evenly: {
        justifyContent: 'space-evenly',
    },
    // Align Items
    items_start: {
        alignItems: 'flex-start',
    },
    items_end: {
        alignItems: 'flex-end',
    },
    items_center: {
        alignItems: 'center',
    },
    items_baseline: {
        alignItems: 'baseline',
    },
    items_stretch: {
        alignItems: 'stretch',
    },
    // Align Content
    content_start: {
        alignContent: 'flex-start',
    },
    content_end: {
        alignContent: 'flex-end',
    },
    content_center: {
        alignContent: 'center',
    },
    content_between: {
        alignContent: 'space-between',
    },
    content_around: {
        alignContent: 'space-around',
    },
    content_stretch: {
        alignContent: 'stretch',
    },
    // Align Self
    self_auto: {
        alignSelf: 'auto',
    },
    self_start: {
        alignSelf: 'flex-start',
    },
    self_end: {
        alignSelf: 'flex-end',
    },
    self_center: {
        alignSelf: 'center',
    },
    self_baseline: {
        alignSelf: 'baseline',
    },
    self_stretch: {
        alignSelf: 'stretch',
    },
    // Flex Wrap
    flex_wrap: {
        flexWrap: 'wrap',
    },
    flex_wrap_reverse: {
        flexWrap: 'wrap-reverse',
    },
    flex_nowrap: {
        flexWrap: 'nowrap',
    },
    // Flex Grow
    grow: {
        flexGrow: 1,
    },
    grow_0: {
        flexGrow: 0,
    },
    // Flex Shrink
    shrink: {
        flexShrink: 1,
    },
    shrink_0: {
        flexShrink: 0,
    },
    // Overflow
    overfow_visible: {
        overflow: 'visible',
    },
    overflow_hidden: {
        overflow: 'hidden',
    },
    // Aspect Ratio (need function)
    aspect_auto: {
        aspectRatio: 'auto',
    },
    aspect_square: {
        aspectRatio: '1/1',
    },
    aspect_video: {
        aspectRatio: '16/9',
    },
    // Position
    absolute: {
        position: 'absolute',
    },
    relative: {
        position: 'relative',
    },
    // colors
    bg_black: {
        backgroundColor: "#000000"
    },
    bg_transparent: {
        backgroundColor: "transparent"
    },
    bg_white: {
        backgroundColor: "#ffffff"
    },
    border_black: {
        borderColor: "#000000"
    },
    border_transparent: {
        borderColor: "transparent"
    },
    border_white: {
        borderColor: "#ffffff"
    },
    shadow_black: {
        shadowColor: "#000000"
    },
    shadow_transparent: {
        shadowColor: "transparent"
    },
    shadow_white: {
        shadowColor: "#ffffff"
    },
    text_black: {
        color: "#000000"
    },
    text_transparent: {
        color: "transparent"
    },
    text_white: {
        color: "#ffffff"
    },

    // Text Transform
    uppercase: {
        textTransform: "uppercase"
    },
    lowercase: {
        textTransform: "lowercase"
    },
    capitalize: {
        textTransform: "capitalize"
    },
};

const styles = StyleSheet.create({
    ...baseStyles,
    ...colorStyles,
});

console.log('#######');
console.log('#######');
console.log('#######');
console.log('#######');
const sizeInBytes = new Blob([JSON.stringify(styles)]).size;
const sizeInMegabytes = sizeInBytes / 1024 / 1024;
console.log(`Size of styles: ${sizeInMegabytes} MB`);
// console.log(baseStyles)
export { styles };