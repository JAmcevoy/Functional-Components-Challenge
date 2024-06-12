import React from "react"; // Importing React library to use JSX syntax

// Defining a functional component called NavBarChild
function NavBarChild(props) {
    return (
        // Conditional rendering: If isLoggedIn prop is true, render the login button. Otherwise, render the login form.
        props.isLoggedIn ? // Checking if the user is logged in
        (
            <button onClick={props.handleClick}>Login</button> // Rendering a login button
        ) : (
            <form> {/* Rendering a form for login */}
                <label htmlFor="username">Username:</label> {/* Label for username input */}
                <input type="text" placeholder="username" id="username"/> {/* Input field for username */}
                
                <label htmlFor="password">Password:</label> {/* Label for password input */}
                <input type="password" placeholder="password" id="password"/> {/* Input field for password */}
                
                <button onClick={props.handleClick}>Submit</button> {/* Submit button for login form */}
            </form>
        )
    );
}

export default NavBarChild; // Exporting the NavBarChild component as default
