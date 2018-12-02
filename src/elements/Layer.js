import React from "react";
import styled from "styled-components";

const OuterLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const InnerLayer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export default (props) => (
    <OuterLayer>
        <InnerLayer>
            {props.children}
        </InnerLayer>
    </OuterLayer>
);