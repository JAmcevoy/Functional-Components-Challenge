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

    // Render method to display the component
    render() {
        return (
            <div>
                {/* Displaying the state and props values in the h1 element */}
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                {/* Displaying the state value in the button */}
                <button>{this.state.buttonText}</button>
            </div>
        );
    }
}

// Exporting the StatefulGreeting component as the default export
export default StatefulGreeting;
