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
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            introduction:
              prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
          };
        });
      }

    // Method to increment the count state value
    increment() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1
            }
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
