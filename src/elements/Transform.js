import React from "react";
import styled from "styled-components";

export default styled(({ children, className }) => {
    return React.cloneElement (React.Children.only (children), {
        className: `${children.props.className} ${className}`.trim ()
    })
})`
    transform: ${props =>
        ["translateX", "translateY", "translateZ", "translate", "rotate", "scale"]
            .map (itm => props[itm] ? `${itm}(${props[itm]})` : null)
            .filter (itm => itm !== null)
            .join (" ")
    };
`;