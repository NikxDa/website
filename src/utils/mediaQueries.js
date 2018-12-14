import { css } from "styled-components";
import breakpointRanges from "./breakpointRanges";

const mediaQueryFromRange = ([min, max]) => {
    return `only screen
        ${(min > 0) && ` and (min-width: ${min}px)`}
        ${(max && max !== Infinity) && ` and (max-width: ${max}px)`}`.replace ("\n", "");
}

const mediaQueries = Object.keys (breakpointRanges).reduce ((acc, label) => {
    let [,max] = breakpointRanges[label];
    return {
        [label]: (...args) => css`
            @media only screen 
                ${(max && max !== Infinity) && ` and (max-width: ${max}px)`} {
                    ${css (...args)}
            }
        `,
        ...acc
    };
}, {});

export default mediaQueries;
export { mediaQueryFromRange };