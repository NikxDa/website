import styled from "styled-components";
import media from "../../utils/mediaQueries";

export default styled.img.attrs ({
    src: props => props.src || "",
    alt: props => props.description || ""
})`
    display: block;
    width: 100%;
    transform: rotate(${props => props.rotation || 0}deg);

    ${media.phone`
        width: 80%;
        margin: 2rem auto;
    `}
`;