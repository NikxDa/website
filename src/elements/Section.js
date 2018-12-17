import styled from "styled-components";

import media from "../utils/mediaQueries";

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 3rem 20%;
    height: ${props => props.fullHeight ? "100vh" : "auto"};
    position: relative;

    ${props => props.backgroundImage && `
        &::after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 500vh;
            width: 100%;
            z-index: -1000;
            background-image: url("${props.backgroundImage}");
            background-repeat: no-repeat;
            background-position: 0 50%;
            background-size: ${props.backgroundSize || "contain"};
            transform: translate3d(0, 50%, 0);
        }
    `}

    ${media.smallDesktop`
        padding: 3rem 15%;
    `}

    ${props => media.phone`
        padding: 3rem 15%;

        &::after {
            background-size: ${parseInt (props.backgroundSize || 100) * 1.7}%;
            background-position: ${props.backgroundSize ? "0 50%" : "50%"};
        }
    `}
`;
