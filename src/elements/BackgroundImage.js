import styled from "styled-components";

export default styled.object.attrs({
    type: "image/svg+xml",
    data: props => props.src || ""
})`
    position: absolute;
    width: ${props => props.width || "100%"};
    left: 0;
    top: ${props => props.top || props.verticalCenter || "0"};
    transform: translateY(${props => props.verticalCenter ? "-50%" : "0"});
`;