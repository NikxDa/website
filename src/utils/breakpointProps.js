import breakpointRanges from "./breakpointRanges";
import { mediaQueryFromRange } from "./mediaQueries";

export default (defaultValue, mediaValues = {}) => {
    const result = Object
        .keys (breakpointRanges)
        .filter (itm => mediaValues[itm] !== undefined)
        .filter (itm => window.matchMedia (mediaQueryFromRange (breakpointRanges[itm])).matches)
        .map (itm => mediaValues[itm])[0] || defaultValue;
    return result;
}