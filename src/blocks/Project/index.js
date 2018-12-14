import React from "react";

import Flex from "../../elements/Flex";
import Margin from "../../elements/Margin";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectType from "./ProjectType";
import ProjectStatus from "./ProjectStatus";
import ProjectImage from "./ProjectImage";

export default ({
    title,
    description,
    type,
    status,
    releaseDate,
    ...props
}) => (
    <div {...props}>
        <ProjectType>{type}</ProjectType>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <Margin top="1rem">
            <Flex justifyContent="space-between">
                <ProjectStatus title="Status" value={status} />
                <ProjectStatus title="Release" value={releaseDate} />
            </Flex>
        </Margin>
    </div>
);

export { ProjectImage };