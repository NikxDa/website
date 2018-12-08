import React from "react";
import styled from "styled-components";

const InnerBar = styled.div`
    height: .5rem;
    border-radius: 1rem;
    width: ${props => Math.min (Math.max (0, props.percent || 0), 100)}%;
    background: linear-gradient(90deg, #FF7D2D 0%, #FF4714 ${props => 100 / Math.min (Math.max (0, props.percent || 0), 100) * 100}%);
`;

const OuterBar = styled.div`
    height: .5rem;
    border-radius: 1rem;
    background-color: #DFDFDF;
`;

export default ({ percent }) => (
    <OuterBar>
        <InnerBar percent={percent} />
    </OuterBar>
);