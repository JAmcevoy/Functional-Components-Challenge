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
        };
    }

    // Method to handle button click and update the state
    handleClick() {
        // Updating the state with a callback to log the new state values
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, () => {
            // Logging the new state values after the state update
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        // Logging the state values before the state update completes (asynchronous nature of setState)
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
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
