import React from "react";

// Defining a stateful class component
class StatefulGreeting extends React.Component {
    // Constructor method to initialize state and props
    constructor(props) {
        super(props);
        // Initializing the state
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    // Method to handle button click and update the state
    handleClick() {
        // Toggling the introduction and buttonText state values
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit!",
        }, () => {
            // Logging the new state values after the state update
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        // Logging the state values before the state update completes (asynchronous nature of setState)
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    // Method to increment the count state value
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    // Render method to display the component
    render() {
        return (
            <div>
                {/* Displaying the state and props values in the h1 element */}
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                {/* Displaying the state value in the button and adding an onClick handler */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                {/* Adding a button to increment the count state value */}
                <button onClick={() => this.increment()}>Increment</button>
                {/* Displaying the count state value */}
                <p>You've clicked {this.state.count} times</p>
            </div>
        );
    }
}

// Exporting the StatefulGreeting component as the default export
export default StatefulGreeting;
