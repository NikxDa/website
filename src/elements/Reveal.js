import React from "react";
import styled from "styled-components";

const RevealContent = styled.div`
    transition: 1s opacity, 1s transform;
    transition-delay: ${props => props.delay || 0}s;
    opacity: ${props => props.isRevealed ? 1 : 0};
    will-change: true;

    ${props => ["top", "right", "bottom", "left"].includes (props.direction) && `
        transform: translate3d(
            ${props.isRevealed ? 0 : (props.direction === "right" ? -1 : (props.direction === "left" ? 1 : 0)) * 3}rem,
            ${props.isRevealed ? 0 : (props.direction === "bottom" ? -1 : (props.direction === "top" ? 1 : 0)) * 3}rem,
            0
        );
    `};
`;

class Reveal extends React.Component {
    constructor (props) {
        super (props);

        this.handleScroll = this.handleScroll.bind (this);

        this.state = {
            isRevealed: false,
            domRef: React.createRef ()
        }
    }

    componentDidMount () {
        window.addEventListener ("scroll", this.handleScroll);
        this.handleScroll ();
    }

    componentWillUnmount () {
        window.removeEventListener ("scroll", this.handleScroll);
    }

    handleScroll () {
        const domNode = this.state.domRef.current;
        if (
            domNode
            && !this.state.isRevealed
            && (domNode.offsetWidth > 0 && domNode.offsetHeight > 0)
        ) {
            const bounds = domNode.getBoundingClientRect ();
            const minScrolledAmount = 50;

            if (
                (bounds.width > 0 && bounds.height > 0) &&
                (bounds.top - window.innerHeight) <= -minScrolledAmount
            ) {
                this.setState ({ isRevealed: true });
                window.removeEventListener ("scroll", this.handleScroll);
            }
        }
    }

    render () {
        return this.props.children;
        
        return (
            <RevealContent ref={this.state.domRef} isRevealed={this.state.isRevealed} {...this.props}>
                {this.props.children}
            </RevealContent>
        );
    }
}

export default Reveal;