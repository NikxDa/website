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
import Contact from './blocks/Contact';
import Grid from "./elements/Grid";
import Flex from "./elements/Flex";
import Reveal from "./elements/Reveal";

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
                    <Margin left="5rem">
                        <Description>
                            A lot of my free-time is spent on&nbsp;software
                            projects and&nbsp;learning new skills. Here is
                            some of my recent work:
                        </Description>
                    </Margin>

                    <Margin top="20rem" left="5rem">
                        <Reveal direction="right">
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
                        </Reveal>
                    </Margin>

                    <Margin top="20rem" bottom="25rem">
                        <Reveal direction="left">
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
                        </Reveal>
                    </Margin>
                </Section>

                {/* Social Section */}
                <Section backgroundImage="/background-3-1.svg" backgroundSize="30%">
                    <Title>Skills enabled.</Title>
                    <Margin left="15rem">
                        <Description>
                        I became interested in technology at the age&nbsp;of&nbsp;5,
                        and I’ve had enough time to learn some of the fancy things.
                        Here's all the nerd stuff I know:
                        </Description>
                    </Margin>

                    <Margin top="35vw" bottom="20vw">
                        <Grid columns={2} verticalSpacing="6rem" horizontalSpacing="8rem">
                            <Reveal>
                                <Skill percent={95} title="JavaScript" level="majestic" />
                            </Reveal>
                            <Reveal delay={.1}>
                                <Skill percent={90} title="HTML & CSS" level="really good" />
                            </Reveal>

                            <Reveal>
                                <Skill percent={45} title="Python" level="mediocre" />
                            </Reveal>
                            <Reveal delay={.1}>
                                <Skill percent={70} title="PHP" level="pretty nice" />
                            </Reveal>

                            <Reveal>
                                <Skill percent={55} title=".NET" level="decent" />
                            </Reveal>
                            <Reveal delay={.1}>
                                <Skill percent={15} title="Rust" level="just starting" />
                            </Reveal>

                            <Reveal>
                                <Skill percent={40} title="Swift" level="quite ok" />
                            </Reveal>
                        </Grid>
                    </Margin>
                </Section>

                {/* Contact Section */}
                <Section backgroundImage="/background-4.svg">
                    <Margin left="5vw">
                        <Title>Get in touch!</Title>
                    </Margin>
                    <Margin right="10vw">
                        <Description>
                            I mean it! If you have an interesting project, are
                            curious what else I am up to or just want to say hi,
                            then go ahead and send me a message.
                        </Description>
                    </Margin>

                    <Margin top="10vw" bottom="20vw" left="20vw">
                        <Flex justifyContent="center">
                            <div>
                                <Contact name="nikxda" method="Stack Overflow" icon="/icon-stackoverflow.svg" link="https://stackoverflow.com/users/nikxda" />
                                <Contact name="nikxda" method="GitHub" icon="/icon-github.svg" link="https://github.com/nikxda" />
                                <Contact name="hello@nikx.io" method="E-Mail" icon="/icon-email.svg" link="mailto:hello@nikx.io" />
                            </div>
                        </Flex>
                    </Margin>
                </Section>
            </div>
        );
    }
}

export default App;
