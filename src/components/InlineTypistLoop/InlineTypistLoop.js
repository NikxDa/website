import Typist from "react-typist";
import React, { Component } from "react";
import styled from "styled-components";

class InlineTypistLoop extends Component {
    constructor (props) {
        super (props);
        this.state = { shouldRestart: false }
    }

    render () {
        // Extract wordlist from props
        const wordList = this.props.wordList || [];
        const wordDelay = this.props.wordDelay || 3500;

        // Define restart procedure
        const restartTyping = () => {
            this.setState ({
                shouldRestart: true
            }, () => {
                this.setState ({
                    shouldRestart: false
                });
            });
        }

        // Render restarting loop
        return this.state.shouldRestart 
            ? ""
            : (
                <Typist className={this.props.className} onTypingDone={restartTyping}>
                    {wordList.map (item => (
                        <span key={item}>
                            {item}
                            <Typist.Backspace count={item.length} delay={wordDelay} />
                        </span>
                    ))}
                </Typist>
            );
    }
}

export default styled(InlineTypistLoop)`
    display: inline;
    color: ${props => props.color || "initial"};
`;