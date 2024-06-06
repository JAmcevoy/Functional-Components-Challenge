import React from "react";

// This component represents a stateful greeting message along with a button to toggle the greeting and a button to increment a counter.

// Defining a stateful class component
class StatefulGreeting extends React.Component {
    // Constructor method to initialize state and props
    constructor(props) {
        super(props);
        // Initializing the state
        this.state = {
            introduction: "Hello!", // Initial greeting message
            buttonText: "Exit", // Initial button text
            count: 0 // Initial count value
        };
    }

    // Method to handle button click and update the state
    handleClick() {
        this.setState((prevState, prevProps) => {
            // Logging the previous state and props values for debugging purposes
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
            return {
                // Toggling the introduction and buttonText state values
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!", // Toggle between "Hello" and "Goodbye"
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit", // Toggle between "Exit" and "Enter"
            };
        });
    }

    // Method to increment the count state value
    increment() {
        this.setState((prevState, prevProps) => {
            // Incrementing the count state value
            return {
                count: prevState.count + 1 // Increment count by 1
            }
        });
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
