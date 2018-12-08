import styled from "styled-components";

export default styled.div`
    position:       relative;
    ${props => 
        ["top", "right", "bottom", "left"].map ((itm, idx) => 
            `padding-${itm}: ${[itm, idx % 2 === 0 ? "vertical" : "horizontal", "all"]
                .map (side => props [side])
                .find (itm => itm !== null) || 0};`
        ).reduce ((a, b) => `${a}\n${b}`, "")
    }
`;