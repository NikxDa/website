import styled from "styled-components";
import { isDesktop } from "../utils/mediaQueries";

export default styled.div`
    display: flex;

    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justifyContent || "space-between"};
    align-items: ${props => props.alignItems || "initial"};
`;