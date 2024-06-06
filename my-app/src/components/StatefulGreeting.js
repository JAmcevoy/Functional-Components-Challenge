import React from "react";  // Importing the React library

// Defining a stateful class component
class StatefulGreeting extends React.Component {
    // Constructor method to initialize state and props
    constructor(props) {
        super(props);  // Calling the parent class's constructor with props
        // Initializing the state
        this.state = {
            introduction: "Hello!",  // Initial state value for introduction
            buttonText: "Exit",  // Initial state value for buttonText
        };
    }

    // Method to handle button click and update the state
    handleClick() {
        this.setState({
            introduction: "Goodbye!",  // Updating the state value for introduction
            buttonText: "Enter", // Updating the state value for buttonText
        });
        // Logging the state value after the state update (will log the previous state value due to asynchronous setState)
        console.log(this.state.introduction);
    }

    // Render method to display the component
    render() {
        return (
            <div>
                {/* Displaying the state and props values in the h1 element */}
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                {/* Displaying the state value in the button and adding an onClick handler */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        );
    }
}

// Exporting the StatefulGreeting component as the default export
export default StatefulGreeting;
