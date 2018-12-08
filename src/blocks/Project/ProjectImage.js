import styled from "styled-components";
import { darkOrange } from "../../utils/themeColors";

export default styled.img`
    width: ${props => props.imageWidth || "50"}%;
`;