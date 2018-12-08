import React from "react";
import styled from "styled-components";
import { mediumGray, lightGray } from "../../utils/themeColors";

const StatusName = styled.p`
    display: block;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 1px;
    color: ${lightGray};
    margin-bottom: .25rem;
`;

const StatusValue = styled.p`
    display: block;
    font-size: 1rem;
    color: ${mediumGray};
`;

export default (props) => (
    <div>
        <StatusName>{props.title}</StatusName>
        <StatusValue>{props.value}</StatusValue>
    </div>
)