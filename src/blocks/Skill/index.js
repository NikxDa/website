import React from "react";

import SkillBar from "./SkillBar";
import SkillDetails from "./SkillDetails";
import SkillName from "./SkillName";
import SkillLevel from "./SkillLevel";

export default ({ percent, title, level }) => (
    <div>
        <SkillBar percent={percent} />
        <SkillDetails>
            <SkillName>{ title }</SkillName>
            <SkillLevel>{ level }</SkillLevel>
        </SkillDetails>
    </div>
);