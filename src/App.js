import React, { Component } from 'react';
import { darkOrange } from "./utils/themeColors";
import { TabletPortraitUp, PhoneOnly, TabletPortraitDown, TabletLandscapeUp } from "./elements/Breakpoint";

// Import font loader
import FontFaceObserver from "./utils/fontFaceObserver.js";

// Components
import Skill from "./blocks/Skill";
import Title from "./elements/Title"
import Description from "./elements/Description"
import Section from "./elements/Section"
import InlineTypistLoop from "./elements/InlineTypistLoop"
import Margin from "./elements/Margin"
import Project, { ProjectImage } from './blocks/Project';
import Contact from './blocks/Contact';
import Grid from "./elements/Grid";
import Note from "./elements/Note";
import Flex from "./elements/Flex";
import Box from "./elements/Box";
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

        window.setTimeout (() => {
            this.removeSpinner ();
        }, 15000);

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
                    <TabletPortraitUp>
                        <Margin left="5rem">
                            <Description>
                                A lot of my free-time is spent on&nbsp;software
                                projects and&nbsp;learning new skills. Here is
                                some of my recent work:
                            </Description>
                        </Margin>
                    </TabletPortraitUp>
                    <PhoneOnly>
                        <Margin left="2rem">
                            <Description>
                                A lot of my free-time is spent on&nbsp;software
                                projects and learning new skills. Here is
                                some of my recent work:
                            </Description>
                        </Margin>
                    </PhoneOnly>

                    <TabletLandscapeUp>
                        <Margin top="10rem" bottom="30rem">
                            <Grid areas={["x1 p1 p1 p1 p1 p1 i1 i1 i1 i1", "i2 i2 i2 i2 p2 p2 p2 p2 p2 x2"]} verticalSpacing="15rem" alignItems="flex-end">
                                <Box gridArea="p1">
                                    <Margin left="10%" right="20%">
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
                                </Box>
                                <Box gridArea="i1">
                                    <Margin bottom="50%">
                                        <Reveal direction="right">
                                            <ProjectImage src="/project-1-1.svg" rotation={-12} description="Open Hacker News" />
                                        </Reveal>
                                    </Margin>
                                </Box>

                                <Box gridArea="i2">
                                    <Margin bottom="50%">
                                        <Reveal direction="left">
                                            <ProjectImage src="/project-2.svg" rotation={8} description="Polar File Sharing" />
                                        </Reveal>
                                    </Margin>
                                </Box>
                                <Box gridArea="p2">
                                    <Margin left="30%">
                                        <Reveal direction="left">
                                            <Project
                                                title="Polar Sharing"
                                                description="Encrypted file sharing for the open web. Lightweight, self-hostable, open-source and packed with features."
                                                type="Web App"
                                                status="Draft & Prototype"
                                                releaseDate="∞"
                                            />
                                        </Reveal>
                                    </Margin>
                                </Box>
                            </Grid>
                        </Margin>
                    </TabletLandscapeUp>
                    <TabletPortraitDown>
                        <Margin top="20vw" bottom="45vw">
                            <Margin bottom="3rem">
                                <Reveal direction="right">
                                    <ProjectImage src="/project-1-1.svg" rotation={-12} description="Open Hacker News" />
                                </Reveal>
                            </Margin>
                            <Reveal direction="right">
                                <Project
                                    title="Open Hacker News"
                                    description="Our goal for the Open HN project is to create beautiful and open-source Hacker News readers for all platforms"
                                    type="iOS App"
                                    status="Active Development"
                                    releaseDate="2019"
                                />
                            </Reveal>

                            <Margin top="10rem" bottom="3rem">
                                <Reveal direction="left">
                                    <ProjectImage src="/project-2.svg" rotation={8} description="Polar File Sharing" />
                                </Reveal>
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
                        </Margin>
                    </TabletPortraitDown>
                </Section>

                {/* Skill Section */}
                <Section backgroundImage="/background-3-1.svg" backgroundSize="30%">
                    <Title>Skills enabled.</Title>

                    <TabletPortraitUp>
                        <Margin left="5rem">
                            <Description>
                                I became interested in technology at the age of five,
                                and I’ve come to learn a lot since. Here's some of the stuff I've learned:
                            </Description>
                        </Margin>
                        <Margin top="40vw" bottom="20vw">
                            <Grid columns={2} verticalSpacing="6rem" horizontalSpacing="8rem">
                                {[
                                    { title: "JavaScript",  percent: 95,    level: "majestic"       },
                                    { title: "HTML & CSS",  percent: 90,    level: "really good"    },
                                    { title: "PHP",         percent: 70,    level: "pretty nice"    },
                                    { title: ".NET",        percent: 55,    level: "decent"         },
                                    { title: "Swift",       percent: 30,    level: "quite ok"       },
                                    { title: "Python",      percent: 40,    level: "average"        },
                                ].map ((itm, idx) => (
                                    <Reveal key={idx} delay={idx % 2 * .1}>
                                        <Skill percent={itm.percent} title={itm.title} level={itm.level} />
                                    </Reveal>
                                ))}
                            </Grid>
                            <Margin top="5rem">
                                <Note>
                                    ...and more! Let's talk if you're interested in what else I can do.
                                </Note>
                            </Margin>
                        </Margin>
                    </TabletPortraitUp>
                    <PhoneOnly>
                        <Margin left="2rem">
                            <Description>
                                I became interested in technology at the age of five!
                                Here's some stuff I've learned:
                            </Description>
                        </Margin>
                        <Margin top="45vw" bottom="10rem">
                            <Grid columns={1} verticalSpacing="4rem" horizontalSpacing="6rem">
                                {[
                                    { title: "JavaScript",  percent: 95,    level: "majestic"       },
                                    { title: "HTML & CSS",  percent: 90,    level: "really good"    },
                                    { title: "PHP",         percent: 70,    level: "pretty nice"    },
                                    { title: ".NET",        percent: 55,    level: "decent"         },
                                    { title: "Python",      percent: 40,    level: "average"        },
                                    { title: "Swift",       percent: 30,    level: "quite ok"       },
                                ].map ((itm, idx) => (
                                    <Reveal key={idx} delay={.1}>
                                        <Skill percent={itm.percent} title={itm.title} level={itm.level} />
                                    </Reveal>
                                ))}
                            </Grid>
                            <Margin top="5rem">
                                <Note>
                                    ...and more! Let's talk if you're interested in what else I can do.
                                </Note>
                            </Margin>
                        </Margin>
                    </PhoneOnly>
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
                                        { name: "nikxda", method: "Stack Overflow", icon: "/icon-stackoverflow.svg", link: "https://stackoverflow.com/users/4459695/nikxda" },
                                        { name: "nikxda", method: "GitHub", icon: "/icon-github.svg", link: "https://github.com/nikxda" },
                                        { name: "hello@nikx.io", method: "E-Mail", icon: "/icon-email.svg", link: "mailto:hello@nikx.io" },
                                    ].map ((itm, idx) => (
                                        <Reveal key={idx} direction="right">
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
                                    { name: "nikxda", method: "Stack Overflow", icon: "/icon-stackoverflow.svg", link: "https://stackoverflow.com/users/4459695/nikxda" },
                                    { name: "nikxda", method: "GitHub", icon: "/icon-github.svg", link: "https://github.com/nikxda" },
                                    { name: "hello@nikx.io", method: "E-Mail", icon: "/icon-email.svg", link: "mailto:hello@nikx.io" },
                                ].map ((itm, idx) => (
                                    <Reveal key={idx} delay={idx * 0.1} direction="right">
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
