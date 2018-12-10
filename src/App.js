import React, { Component } from 'react';
import { darkOrange } from "./utils/themeColors";

// Import font loader
import FontFaceObserver from "./utils/fontFaceObserver.js";

// Components
import Skill from "./blocks/Skill";
import Title from "./elements/Title"
import Description from "./elements/Description"
import Section from "./elements/Section"
import InlineTypistLoop from "./elements/InlineTypistLoop"
import Margin from "./elements/Margin"
import Transform from "./elements/Transform"
import Spinner from "./elements/Spinner"
import Project from './blocks/Project';
import Contact from './blocks/Contact';
import Grid from "./elements/Grid";
import Flex from "./elements/Flex";
import Reveal from "./elements/Reveal";
import Media, { breakpoints } from "./elements/Media";

class App extends Component {
    constructor (props) {
        super (props);

        this.state = {
            loadingDone: false
        }
    }

    componentDidMount () {
        // Define font definitions
        let fontDefinitions = [
            { name: "Source Sans Pro",  weight: 400 },
            { name: "Source Sans Pro",  weight: 600 },
            { name: "Montserrat",       weight: 400 },
            { name: "Montserrat",       weight: 600 },
            { name: "Montserrat",       weight: 700 },
            { name: "Montserrat",       weight: 900 },
        ];

        // Map all font definitions to font-face observer promises
        fontDefinitions = fontDefinitions.map (itm => {
            const fontLoader = new FontFaceObserver (itm.name, {
                weight: itm.weight
            });
            return fontLoader.load (null, 10000);
        });

        // Define background images
        let backgroundImages = [
            "/background-1.svg",
            "/background-2.svg",
            "/background-3-1.svg",
            "/background-4.svg",
        ];

        // Map all background image urls to loading promises
        backgroundImages = backgroundImages.map (itm => {
            return new Promise ((res, rej) => {
                const img = new Image ();
                img.onload = res;
                img.src = itm;
            });
        });

        // Wait for all assets to load
        Promise.all ([
            ...backgroundImages,
            ...fontDefinitions
        ]).then (() => {
            // Display the content after assets are loaded
            this.removeSpinner ();
        }).catch (() => {
            // If something failed to load, still display the content
            this.removeSpinner ();
        })
    }

    removeSpinner () {
        // Fetch element by querySelector since it is outside of React context
        const spinnerEl = document.querySelector (".loading-spinner");

        // If found, remove
        if (spinnerEl) {
            // Clear content immediately
            spinnerEl.innerHTML = "";

            // Remove element after transition is done
            spinnerEl.addEventListener ("transitionend", () => {
                spinnerEl.parentNode.removeChild (spinnerEl);
            });
            
            // Start the transition
            spinnerEl.style.opacity = 0;
        }
    }

    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                {/* Hero Header Section */}
                <Section backgroundImage="/background-1.svg" fullHeight="true">
                    <Margin leftPhone="10%">
                        <Title>Hi!</Title>
                        <Description>
                            I'm Nik, a&nbsp;
                            <InlineTypistLoop 
                                color={darkOrange}
                                wordList={[
                                    "software engineer", 
                                    "web developer",
                                    "UI/UX designer"
                                ]}
                                wordDelay={5000}
                            /><br />
                            from Germany.
                        </Description>
                    </Margin>
                </Section>

                {/* Showcase Section */}
                <Section backgroundImage="/background-2.svg">
                    <Title>I do stuff.</Title>
                    <Margin left="5rem" leftPhone="3rem">
                        <Description>
                            A lot of my free-time is spent on&nbsp;software
                            projects and&nbsp;learning new skills. Here is
                            some of my recent work:
                        </Description>
                    </Margin>

                    <Margin top="20rem" left="10rem">
                        <Flex alignItems="flex-end">
                            <Reveal style={{ width: "40%" }} direction="right">
                                <Project
                                    title="Open Hacker News"
                                    description="Our goal for the Open HN project is to create beautiful and open-source Hacker News readers for all platforms"
                                    type="iOS App"
                                    status="Active Development"
                                    releaseDate="2019"
                                />
                            </Reveal>
                            <img style={{ display: "block", width: "30%", transform: "translateY(-10rem) rotate(-12deg)" }} src="/project-1.svg" />
                        </Flex>
                    </Margin>

                    <Margin top="25rem" bottom="30rem">
                        <Flex alignItems="flex-end">
                            <Media breakpoint={breakpoints.phone}>
                                <img style={{ display: "block", width: "50%", transform: "translateY(-10rem) rotate(8deg)" }} src="/project-2.svg" />
                            </Media>
                            <Reveal direction="left" style={{ width: "40%" }}>
                                <Project
                                    title="Polar Sharing"
                                    description="Encrypted file sharing for the open web. Lightweight, self-hostable, open-source and packed with features."
                                    type="Web App"
                                    status="Draft & Prototype"
                                    releaseDate="∞"
                                />
                            </Reveal>
                        </Flex>
                    </Margin>
                </Section>

                {/* Social Section */}
                <Section backgroundImage="/background-3-1.svg" backgroundSize="30%">
                    <Title>Skills enabled.</Title>
                    <Margin left="15rem" leftPhone="2rem" topPhone="2rem">
                        <Description>
                            I became interested in technology at the age&nbsp;of&nbsp;5,
                            and I’ve come to learn a lot since. Here's all the stuff I do:
                        </Description>
                    </Margin>

                    <Margin top="35vw" topPhone="20vw" bottom="20vw" horizontalPhone="5%">
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
                    <Margin bottom="15vw">
                        <Flex>
                            <div>
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
                            </div>
                            <Margin top="10vw" right="5vw">
                                <Reveal direction="right">
                                    <Contact name="nikxda" method="Stack Overflow" icon="/icon-stackoverflow.svg" link="https://stackoverflow.com/users/nikxda" />
                                </Reveal>
                                
                                <Reveal direction="right">
                                    <Margin top="2rem">
                                        <Contact name="nikxda" method="GitHub" icon="/icon-github.svg" link="https://github.com/nikxda" />
                                    </Margin>
                                </Reveal>

                                <Reveal direction="right">
                                    <Margin top="2rem">
                                        <Contact name="hello@nikx.io" method="E-Mail" icon="/icon-email.svg" link="mailto:hello@nikx.io" />
                                    </Margin>
                                </Reveal>
                            </Margin>
                        </Flex>
                    </Margin>
                </Section>
            </div>
        );
    }
}

export default App;
