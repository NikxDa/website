import React, { Component } from 'react';

import Skill from "./blocks/Skill";

// Components
import Title from "./elements/Title"
import Description from "./elements/Description"
import Section from "./elements/Section"
import InlineTypistLoop from "./elements/InlineTypistLoop"
import Margin from "./elements/Margin"
import Transform from "./elements/Transform"
import Project from './blocks/Project';

class App extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                {/* Hero Header Section */}
                <Section backgroundImage="/background-1.svg" fullHeight="true">
                    <Title>Hi!</Title>
                    <Description>
                        I'm Nik, a&nbsp;
                        <InlineTypistLoop 
                            color="#ff4714" 
                            wordList={[
                                "software engineer", 
                                "web developer",
                                "UI/UX designer"
                            ]}
                            wordDelay={5000}
                        /><br />
                        from Germany.
                    </Description>
                </Section>

                {/* Showcase Section */}
                <Section backgroundImage="/background-2.svg">
                    <Title>I do stuff.</Title>
                    <Description>
                        A lot of my free-time is spent on&nbsp;software
                        projects and&nbsp;learning new skills. Here is
                        some of my recent work:
                    </Description>

                    <Margin top="20rem" left="5rem">
                        <Project
                            title="Open Hacker News"
                            description="Our goal for the Open HN project is to create beautiful and open-source Hacker News readers for all platforms"
                            type="iOS App"
                            image="/project-1.svg" imageWidth={30}
                            imageTranslateY="-10rem"
                            imageTranslateRotate="-12deg"
                            imageOrientation="r"
                            status="Active Development"
                            releaseDate="2019"
                        />
                    </Margin>

                    <Margin top="20rem" bottom="25rem">
                        <Project
                            title="Polar Sharing"
                            description="Encrypted file sharing for the open web. Lightweight, self-hostable, open-source and packed with features."
                            type="Web App"
                            image="/project-2.svg" imageWidth={50}
                            imageTranslateX="-5rem"
                            imageTranslateY="-15rem"
                            imageTranslateRotate="8deg"
                            status="Draft & Prototype"
                            releaseDate="∞"
                        />
                    </Margin>
                </Section>

                {/* Social Section */}
                <Section backgroundImage="/background-3.svg" backgroundSize="30%">
                    <Title>Skills enabled.</Title>
                    <Margin left="15rem">
                        <Description>
                        I became interested in technology at the age&nbsp;of&nbsp;5,
                        and I’ve had enough time to learn some of the fancy things.
                        Here's all the nerd stuff I know:
                        </Description>
                    </Margin>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div>
                    <Skill percent={85} title="JavaScript" level="majestic" />
                    <Skill percent={45} title="Python" level="mediocre" />
                    <Skill percent={65} title=".NET (C#)" level="damn sure" />
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </Section>

                {/* Contact Section */}
                <Section backgroundImage="/background-4.svg">
                    <Title>Get in touch!</Title>
                    <Description>
                        I mean it! If you have an interesting project, are
                        curious what else I am up to or just want to say hi,
                        then go ahead and send me a message.
                    </Description>
                </Section>
            </div>
        );
    }
}

export default App;
