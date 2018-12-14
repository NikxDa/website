import React, { Component } from 'react';
import { darkOrange } from "./utils/themeColors";
import { TabletPortraitDown, TabletLandscapeUp } from "./elements/Breakpoint";

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

                    <Margin top="10rem" bottom="30rem">
                        <Grid columnDefs="1fr 1fr" verticalSpacing="25rem" horizontalSpacing="20%" alignItems="flex-end">
                            <Margin left="20%">
                                <Reveal direction="right">
                                    <Project
                                        title="Open Hacker News"
                                        description="Our goal for the Open HN project is to create beautiful and open-source Hacker News readers for all platforms"
                                        type="iOS App"
                                        status="Active Development"
                                        releaseDate="2019"
                                    />
                                </Reveal>
                            </Margin>
                            <Margin bottom="10rem" right="20%">
                                <img style={{ display: "block", width: "100%", transform: "rotate(-12deg)" }} src="/project-1.svg" />
                            </Margin>

                            <Margin right="30%" bottom="20rem">
                                <img style={{ display: "block", width: "100%", transformOrigin: "0 50%", transform: "rotate(8deg) scale(1.8)" }} src="/project-2.svg" />
                            </Margin>
                            <Reveal direction="left">
                                <Project
                                    title="Polar Sharing"
                                    description="Encrypted file sharing for the open web. Lightweight, self-hostable, open-source and packed with features."
                                    type="Web App"
                                    status="Draft & Prototype"
                                    releaseDate="∞"
                                />
                            </Reveal>
                        </Grid>
                    </Margin>
                </Section>

                {/* Social Section */}
                <Section backgroundImage="/background-3-1.svg" backgroundSize="30%">
                    <Title>Skills enabled.</Title>
                    <Margin left="15rem">
                        <Description>
                            I became interested in technology at the age&nbsp;of&nbsp;5,
                            and I’ve come to learn a lot since. Here's all the stuff I do:
                        </Description>
                    </Margin>

                    <Margin top="35vw" topPhone="20vw" bottom="20vw" horizontalPhone="5%">
                        <Grid columns={2} verticalSpacing="6rem" horizontalSpacing="8rem">
                            {[
                                { title: "JavaScript",  percent: 95,    level: "majestic"       },
                                { title: "HTML & CSS",  percent: 90,    level: "really good"    },
                                { title: "Python",      percent: 45,    level: "mediocre"       },
                                { title: "PHP",         percent: 70,    level: "pretty nice"    },
                                { title: ".NET",        percent: 55,    level: "decent"         },
                                { title: "Rust",        percent: 15,    level: "just starting"  },
                                { title: "Swift",       percent: 40,    level: "quite ok"       },
                            ].map ((itm, idx) => (
                                <Reveal delay={idx % 2 * .1}>
                                    <Skill percent={itm.percent} title={itm.title} level={itm.level} />
                                </Reveal>
                            ))}
                        </Grid>
                    </Margin>
                </Section>

                {/* Contact Section */}
                <Section backgroundImage="/background-4.svg">
                    <TabletLandscapeUp>
                        <Margin bottom="15vw">
                            <Flex>
                                <div>
                                    <Margin left="5vw">
                                        <Title>Get in touch!</Title>
                                    </Margin>
                                    <Margin right="10vw">
                                        <Description>
                                            Want to work together or have
                                            an interesting project? Just drop me a message
                                            and I'll be in touch.
                                        </Description>
                                    </Margin>
                                </div>
                                <Margin top="10vw" right="5vw">
                                    {[
                                        { name: "nikxda", method: "Stack Overflow", icon: "/icon-stackoverflow.svg", link: "https://stackoverflow.com/users/nikxda" },
                                        { name: "nikxda", method: "GitHub", icon: "/icon-github.svg", link: "https://github.com/nikxda" },
                                        { name: "hello@nikx.io", method: "E-Mail", icon: "/icon-email.svg", link: "mailto:hello@nikx.io" },
                                    ].map ((itm, idx) => (
                                        <Reveal direction="right">
                                            <Margin top={idx > 0 ? "2rem" : "0"}>
                                                <Contact name={itm.name} method={itm.method} icon={itm.icon} link={itm.link} />
                                            </Margin>
                                        </Reveal>
                                    ))}
                                </Margin>
                            </Flex>
                        </Margin>
                    </TabletLandscapeUp>
                    <TabletPortraitDown>
                        <Margin bottom="15vw">
                            <div>
                                <Margin left="5vw">
                                    <Title>Get in touch!</Title>
                                </Margin>
                                <Description>
                                    Want to work together or have
                                    an interesting project? Just drop me a message
                                    and I'll be in touch.
                                </Description>
                            </div>
                            <Margin horizontal="auto" top="20vw">
                                {[
                                    { name: "nikxda", method: "Stack Overflow", icon: "/icon-stackoverflow.svg", link: "https://stackoverflow.com/users/nikxda" },
                                    { name: "nikxda", method: "GitHub", icon: "/icon-github.svg", link: "https://github.com/nikxda" },
                                    { name: "hello@nikx.io", method: "E-Mail", icon: "/icon-email.svg", link: "mailto:hello@nikx.io" },
                                ].map ((itm, idx) => (
                                    <Reveal direction="right">
                                        <Margin top={idx > 0 ? "2rem" : "0"}>
                                            <Contact name={itm.name} method={itm.method} icon={itm.icon} link={itm.link} />
                                        </Margin>
                                    </Reveal>
                                ))}
                            </Margin>
                        </Margin>
                    </TabletPortraitDown>
                </Section>
            </div>
        );
    }
}

export default App;
