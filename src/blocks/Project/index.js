import React from "react";

import Flex from "../../elements/Flex";
import Transform from "../../elements/Transform";
import Margin from "../../elements/Margin";

import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectType from "./ProjectType";
import ProjectStatus from "./ProjectStatus";

export default ({
    title,
    description,
    image,
    type,
    status,
    releaseDate,
    imageWidth,
    imageOrientation,
    imageTranslateX,
    imageTranslateY,
    imageTranslateRotate
}) => (
    <Flex direction="row" justifyContent="space-around" alignItems="center">
        { imageOrientation !== "r" && 
            <Transform translateX={imageTranslateX} translateY={imageTranslateY} rotate={imageTranslateRotate}>
                <ProjectImage imageWidth={imageWidth} src={image} />
            </Transform>
        }

        <div style={{width: "40%"}}>
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
        
        { imageOrientation === "r" && 
            <Transform translateX={imageTranslateX} translateY={imageTranslateY} rotate={imageTranslateRotate}>
                <ProjectImage imageWidth={imageWidth} src={image} />
            </Transform>
        }
    </Flex>
);