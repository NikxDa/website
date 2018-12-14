import styled from "styled-components";
import breakpointRanges from "../utils/breakpointRanges";

const createResponsiveComponent = ([min, max]) => styled.div`
    display: none;

    @media only screen
        ${(min > 0) && ` and (min-width: ${min}px)`}
        ${(max && max !== Infinity) && ` and (max-width: ${max}px)`} {
            display: block;
        }
`;

const mergeRanges = (...ranges) => {
    return ranges
        .filter (itm => Array.isArray (itm))
        .reduce ((acc, itm) => [...acc, ...itm], [])
        .sort ((a, b) => a - b)
        .filter ((itm, idx, arr) => [0, arr.length - 1].includes (idx));
}

const breakpointsUpTo = ([min, max]) => {
    return mergeRanges (...Object
        .values (breakpointRanges)
        .filter (([itmMin, itmMax]) => itmMax <= max)
    );
}

const breakpointsDownTo = ([min, max]) => {
    return mergeRanges (...Object
        .values (breakpointRanges)
        .filter (([itmMin, itmMax]) => itmMin >= min)
    );
}

export const PhoneOnly = createResponsiveComponent (breakpointRanges.phone);
export const TabletPortraitDown = createResponsiveComponent (breakpointsUpTo (breakpointRanges.tabletPortrait));
export const TabletPortraitUp = createResponsiveComponent (breakpointsDownTo (breakpointRanges.tabletPortrait));
export const TabletLandscapeDown = createResponsiveComponent (breakpointsUpTo (breakpointRanges.tabletLandscape));
export const TabletLandscapeUp = createResponsiveComponent (breakpointsDownTo (breakpointRanges.tabletLandscape));
export const SmallDesktopDown = createResponsiveComponent (breakpointsUpTo (breakpointRanges.smallDesktop));
export const SmallDesktopUp = createResponsiveComponent (breakpointsDownTo (breakpointRanges.smallDesktop));
export const LargeDesktop = createResponsiveComponent (breakpointRanges.largeDesktop);

export default ({ min, max }) => createResponsiveComponent ([min, max]);