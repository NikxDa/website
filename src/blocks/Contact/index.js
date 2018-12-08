import React from "react";
import styled from "styled-components";

import Flex from "../../elements/Flex";

import ContactIcon from "./ContactIcon";
import ContactName from "./ContactName";
import ContactMethod from "./ContactMethod";

const Contact = ({
    icon,
    name,
    method,
    link,
    linkText,
    className
}) => (
    <a className={className} target="_blank" href={link} alt={linkText}>
        <Flex justifyContent="flex-start" alignItems="center">
            <ContactIcon src={icon} />
            <div style={{ flex: 1 }}>
                <ContactName>{name}</ContactName>
                <ContactMethod>{method}</ContactMethod>
            </div>
        </Flex>
    </a>
);

export default styled(Contact)`
    display: block;
    text-decoration: none;
    
    & + & {
        margin-top: 2rem;
    }
`;