import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns || 2}, 1fr);
    row-gap: ${props => props.verticalSpacing || "0"};
    column-gap: ${props => props.horizontalSpacing || "0"};
`;