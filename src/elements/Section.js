import React, { Component } from "react";
import styled from "styled-components";

const Section = React.forwardRef ((props, ref) => (
    <div className={props.className} ref={ref}>{props.children}</div>
));

export default styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 3rem 20%;
    height: ${props => props.fullHeight ? "100vh" : "auto"};
`;
