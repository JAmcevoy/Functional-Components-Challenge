// Importing necessary modules from React library and local files
import React, { Component } from 'react'; // Importing React and Component from 'react' library
import css from "./css/NavBarForm.module.css"; // Importing CSS Module for styling
import NavBarChild from "./NavBarChild"; // Importing the nested NavBarChild component

// Defining a class component named NavBarForm
export class NavBarForm extends Component { 
  constructor(props) {
    super(props); // Ensuring proper setup by calling the constructor of the parent class (Component)
    // Setting up the initial state of the component
    this.state = {
      isLoggedIn: true, // A boolean state to keep track of whether the user is logged in or not
    };
  }

  // Defining a method to handle button click events
  handleButtonClick = () => { 
    // Updating the state based on the previous state using setState
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn, // Toggling the value of isLoggedIn from true to false, or false to true
    }), () => console.log(this.state.isLoggedIn)); // Logging the updated state to the console after setState is completed
  };

  // Rendering method - responsible for rendering the JSX (UI) of the component
  render() { 
    return (
      <div className={css.NavBar}> {/* Rendering a div with className from CSS Module */}
        <h1>My Gallery</h1> {/* Rendering an h1 heading */}
        {/* Rendering the NavBarChild component and passing props */}
        <NavBarChild
          isLoggedIn={this.state.isLoggedIn} // Passing the isLoggedIn state as a prop to NavBarChild
          handleClick={this.handleButtonClick} // Passing the handleButtonClick method as a prop to NavBarChild
        />
      </div>
    );
  }
}

// Exporting the NavBarForm component as the default export
export default NavBarForm; 


