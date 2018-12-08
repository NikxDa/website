import React from "react";
import styled from "styled-components";
import { brightGray, brightOrange, darkOrange } from "../../utils/themeColors";

const InnerBar = styled.div`
    height: .5rem;
    border-radius: 1rem;
    width: ${props => Math.min (Math.max (0, props.percent || 0), 100)}%;
    background: linear-gradient(90deg, ${brightOrange} 0%, ${darkOrange} ${props => 100 / Math.min (Math.max (0, props.percent || 0), 100) * 100}%);
`;

const OuterBar = styled.div`
    height: .5rem;
    border-radius: 1rem;
    background-color: ${brightGray};
`;

export default ({ percent }) => (
    <OuterBar>
        <InnerBar percent={percent} />
    </OuterBar>
);