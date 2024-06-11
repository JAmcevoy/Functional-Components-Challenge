// We're importing React and Component from the 'react' library.
import React, { Component } from "react"; 

// Importing CSS styles for our NavBarSimple component.
import css from "./css/NavBarSimple.module.css";

// This is our NavBarSimple component.
class NavBarSimple extends Component {
    
    // This method runs when our component is created.
    constructor(props) {
        super(props);

        // Here, we're setting up the initial state for our component.
        // The state includes a message and a button text.
        this.state = {
            message: "Hello, guest!", // Default message when user hasn't logged in
            buttonText: "Log in" // Text for the button when it says "Log in"
        }
    }

    // This method handles what happens when the button is clicked.
    handleclick = () => {
        // We're updating the state based on what it was before.
        this.setState((prevState) => ({
            // If the message was "Hello, guest!", change it to "Welcome back, user!" and vice versa.
            message: prevState.message === "Hello, guest!" ? `Welcome back, ${this.props.name}!` : "Hello, guest!",
            // If the button text was "Log out", change it to "Log in" and vice versa.
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }), () => console.log(this.state.message)) // We're also logging the updated message to the console.
    }

    // This method renders the actual content of our component.
    render() {
        return (
            <div className={css.NavBar}> {/* We're applying CSS styles to this div */}
                <h1>My Gallery</h1> {/* Displaying a title for our NavBar */}
                <div>
                    {/* Displaying the current message in our component */}
                    <span>{this.state.message}</span>
                    {/* This button triggers the handleclick method when clicked */}
                    <button onClick={() => this.handleclick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

// We're exporting the NavBarSimple component so it can be used elsewhere.
export default NavBarSimple;
