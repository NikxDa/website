import styled from "styled-components";
import { mediumGray } from "../utils/themeColors";

export default styled.h2`
    font-weight: 400;
    color: ${mediumGray};
    font-size: 1.2rem;
    max-width: 80%;

    @media only screen and (max-width: 900px) {
        max-width: 100%;
    }
`;