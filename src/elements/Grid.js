import styled from "styled-components";
import media from "../utils/mediaQueries";

export default styled.div`
    display: grid;
    grid-template-columns: ${props => props.areas ? `repeat(${props.areas [0].split (" ").length}, 1fr)` : (props.columnDefs ? props.columnDefs : `repeat(${props.columns || 2}, 1fr)`)};
    row-gap: ${props => props.verticalSpacing || "0"};
    column-gap: ${props => props.horizontalSpacing || "0"};
    align-items: ${props => props.alignItems || "flex-start"};
    grid-template-areas: ${props => props.areas ? props.areas.reduce ((acc, itm) => acc += `"${itm}" `, "") : `""`};
`;