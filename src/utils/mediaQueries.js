import { css } from "styled-components";

const mediaSizes = {
    phoneScreen: 600,
    tabletScreen: 900,
    desktopScreen: 1200
}

const mediaQueries = Object.keys (mediaSizes).reduce ((acc, label) => {
    return {
        [label]: (...args) => css`
            @media only screen and (max-width: ${mediaSizes [label]}px) {
                ${css (...args)}
            }
        `,
        ...acc
    };
}, {});

export const isPhone = mediaQueries.phoneScreen;
export const isTablet = mediaQueries.tabletScreen;
export const isDesktop = mediaQueries.desktopScreen;