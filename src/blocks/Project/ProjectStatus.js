import React from "react";
import styled from "styled-components";

const StatusName = styled.p`
    display: block;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 1px;
    color: #959EB2;
    margin-bottom: .25rem;
`;

const StatusValue = styled.p`
    display: block;
    font-size: 1rem;
    color: #666C7A;
`;

export default (props) => (
    <div>
        <StatusName>{props.title}</StatusName>
        <StatusValue>{props.value}</StatusValue>
    </div>
)