import styled from "styled-components";
import { darkGray } from "../utils/themeColors";

export default styled.h1`
    &, & * {
        color: ${darkGray};
        font-family: "Montserrat", serif;
        font-size: 2.5rem;
        font-weight: 700;
    }

    margin-bottom: 1rem;
`;