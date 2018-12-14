import styled from "styled-components";

export default styled.div`
    display: flex;

    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justifyContent || "space-between"};
    align-items: ${props => props.alignItems || "initial"};
`;