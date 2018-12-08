import React, { Component } from "react";
import styled from "styled-components";

const Section = React.forwardRef ((props, ref) => (
    <div className={props.className} ref={ref}>{props.children}</div>
));

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 3rem 20%;
    height: ${props => props.fullHeight ? "100vh" : "auto"};
    position: relative;

    ${props => props.backgroundImage && `
        &::after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 500vh;
            float: left;
            width: 100%;
            z-index: -1000;
            background-image: url("${props.backgroundImage}");
            background-repeat: no-repeat;
            background-position-y: 50%;
            background-size: ${props.backgroundSize || "contain"};
            transform: translateY(50%);
        }
    `}
`;
