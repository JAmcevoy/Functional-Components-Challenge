import React, { Component } from "react"; // Importing React library and Component from 'react' module
import css from "./css/Content.module.css"; // Importing CSS Module for styling
import { savedPosts } from "../posts.json"; // Importing savedPosts array from posts.json file
import PostItem from "./PostItem"; // Importing the child component PostItem
import Loader from "./Loader"; // Importing the Loader component

// Defining a class component called Content
export class Content extends Component {
    constructor(props) {
        super(props); // Calling the constructor of the parent class (Component)

        // Initializing the state
        // Why: To manage whether the posts are loaded or not
        this.state = {
            isLoaded: false
        };
    }

    // Lifecycle method called after the component is mounted
    // Why: To simulate an asynchronous data fetch
    // How: Sets isLoaded to true after a delay of 2 seconds
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
            });
        }, 2000);
    }

    // Render method to display the component
    // Why: To render the UI based on the current state
    // How: Displays a loader until the data is loaded, then displays the posts
    render() {
        return (
            <div className={css.Content}> {/* Applying the 'Content' CSS class from the CSS module */}
                <div className={css.TitleBar}> {/* Applying the 'TitleBar' CSS class from the CSS module */}
                    <h1>My Photos</h1> {/* Rendering a heading */}
                </div>

                <div className={css.SearchResults}> {/* Applying the 'SearchResults' CSS class from the CSS module */}
                    {
                        this.state.isLoaded ? // Conditional rendering based on the isLoaded state
                        <PostItem savedPosts={savedPosts} /> // Rendering PostItem component with savedPosts as a prop
                        : <Loader /> // Rendering Loader component if the data is not yet loaded
                    }
                </div>
            </div>
        );
    }
}

export default Content; // Exporting the Content component as the default export
