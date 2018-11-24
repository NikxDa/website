import React, { Component } from 'react';

// Components
import Title from "./components/Title/Title"
import Subtitle from "./components/Subtitle/Subtitle"
import Section from "./components/Section/Section"
import InlineTypistLoop from "./components/InlineTypistLoop/InlineTypistLoop"

class App extends Component {
  render() {
    return (
      <div>
        <Section fullHeight="true">
          <Title>Hi!</Title>
          <Subtitle>
            I'm Nik, a&nbsp;
            <InlineTypistLoop 
              color="#ff4714" 
              wordList={["software developer", "web developer"]} />
            <br />
            from Germany.
          </Subtitle>
        </Section>
        <Section>Normal size</Section>
        <Section>Normal size again</Section>
      </div>
    );
  }
}

export default App;
