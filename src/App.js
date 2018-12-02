import React, { Component } from 'react';

import Skill from "./blocks/Skill";

// Components
import Title from "./elements/Title"
import BackgroundImage from "./elements/BackgroundImage"
import Layer from "./elements/Layer"
import Description from "./elements/Description"
import Section from "./elements/Section"
import InlineTypistLoop from "./elements/InlineTypistLoop"

class App extends Component {
    constructor (props) {
        super (props);

        this.state = {
            sectionRefs: [
                React.createRef (),
                React.createRef (),
                React.createRef (),
                React.createRef ()
            ],
            sectionOffsets: [
                0,
                0,
                0,
                0
            ]
        }

    }

    componentDidMount () {
        this.calculateSectionOffsets ();
    }

    calculateSectionOffsets () {
        const newSectionOffsets = this.state.sectionRefs.map (itm => {
            return itm.current ? itm.current.getBoundingClientRect ().top : 0;
        });

        this.setState ({ sectionOffsets: newSectionOffsets });
    }

    render() {
        return (
            <div>
                {/* Background images */}
                <Layer>
                    <BackgroundImage verticalCenter="100vh" src="http://localhost:3000/background-1.svg" />
                    <BackgroundImage verticalCenter={this.state.sectionOffsets [2] + "px"} src="http://localhost:3000/background-2.svg" />
                    <BackgroundImage verticalCenter={this.state.sectionOffsets [3] + "px"} width="35%" src="http://localhost:3000/background-3.svg" />
                    <BackgroundImage top="6000px" src="http://localhost:3000/background-4.svg" />
                </Layer>

                {/* Foreground content */}
                <Layer>
                    {/* Hero Header Section */}
                    <Section fullHeight="true" ref={this.state.sectionRefs [0]}>
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
                    <Section ref={this.state.sectionRefs [1]}>
                        <Title>I do stuff.</Title>
                        <Description>
                            A lot of my free-time is spent on&nbsp;software
                            projects and&nbsp;learning new skills. Here is
                            some of my recent work:
                        </Description>

                        {/* TODO: Projects */}
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br />
                    </Section>

                    {/* Social Section */}
                    <Section ref={this.state.sectionRefs [2]}>
                        <Title>Skills enabled.</Title>
                        <Description>
                        I became interested in technology at the age&nbsp;of&nbsp;5,
                        and I’ve had enough time to learn some of the fancy things.
                        Here's all the nerd stuff I know:
                        </Description>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br />
                        <Skill percent={85} title="JavaScript" level="majestic" />
                    </Section>

                    {/* Contact Section */}
                    <Section ref={this.state.sectionRefs [3]}>
                        <Title>Get in touch!</Title>
                        <Description>
                            I mean it! If you have an interesting project, are
                            curious what else I am up to or just want to say hi,
                            then go ahead and send me a message.
                        </Description>
                    </Section>
                </Layer>
            </div>
        );
    }
}

export default App;
