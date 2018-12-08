import styled from "styled-components";
import { brightGray } from "../../utils/themeColors";

export default styled.div`
    background-image: url("${props => props.src}");
    background-size: 2.5rem;
    background-position: 50%;
    background-repeat: no-repeat;
    padding: 2rem;
    border-radius: 5rem;
    margin-right: 2rem;
`;