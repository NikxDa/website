import styled from "styled-components";

export default styled.div`
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    display: ${props => props.display || "block"};
    grid-area: ${props => props.gridArea || "none"};
`