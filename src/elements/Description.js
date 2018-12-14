import styled from "styled-components";
import { mediumGray } from "../utils/themeColors";
import media from "../utils/mediaQueries";

export default styled.h2`
    font-weight: 400;
    color: ${mediumGray};
    font-size: 1.2rem;
    max-width: 60%;

    ${media.tabletLandscape`
        max-width: 70%;
    `}

    ${media.tabletPortrait`
        max-width: 80%;
    `}

    ${media.phone`
        max-width: 90%;
    `}
`;