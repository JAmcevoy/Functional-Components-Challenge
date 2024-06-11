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


```
Here's a breakdown of what each part does:

We're importing React library so that we can use JSX syntax.
We define a functional component called NavBarChild which takes props as an argument.
Inside the component, we're using conditional rendering to determine whether to render a login button or a login form based on the value of the isLoggedIn prop.
If isLoggedIn is true, we render a login button with an onClick event handler that calls the handleClick function passed from the parent component (NavBarForm).
If isLoggedIn is false, we render a login form with input fields for username and password, and a submit button. Again, the onClick event handler is used to call the handleClick function passed from the parent component (NavBarForm).
```
