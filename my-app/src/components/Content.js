import React, { Component } from "react"; // Importing React library and Component from 'react' module
import css from "./css/Content.module.css"; // Importing CSS Module for styling
import { savedPosts } from "../posts.json"; // Importing savedPosts array from posts.json file
import PostItem from "./PostItem"; // Importing the child component PostItem
import Loader from "./Loader"; // Importing the Loader component

// Defining a class component called Content
export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false, // State to manage if data is loaded
            posts: [], // State to hold the list of posts
        };
    }

    // Simulating data fetching after component mounts
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts, // Setting state with data from savedPosts
            });
        }, 2000); // Simulating a 2-second delay
    }

    // Handler for input change in the search field
    handleChange = (e) => {
        const name = e.target.value.toLowerCase(); // Get input value and convert to lowercase
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name); // Filter posts by name based on input
        });

        this.setState({
            posts: filteredPosts, // Update state with filtered posts
        });
    };

    // Render method to display the component
    render() {
        return (
            <div className={css.Content}> {/* Main container for the content */}
                <div className={css.TitleBar}> {/* Container for the title bar */}
                    <h1>My Photos</h1> {/* Title */}
                    <form>
                        <label htmlFor='searchinput'>Search</label> {/* Label for the search input */}
                        <input
                            type='search'
                            id='searchinput'
                            placeholder='By Author' // Placeholder text
                            onChange={(e) => this.handleChange(e)} // Event handler for input change
                        />
                        <h4>Posts found: {this.state.posts.length}</h4> {/* Display number of posts found */}
                    </form>
                </div>

                <div className={css.SearchResults}> {/* Container for the search results */}
                    {
                        this.state.isLoaded ? // Check if data is loaded
                        <PostItem savedPosts={this.state.posts} /> // Display posts if loaded
                        : <Loader /> // Display loader if data is not loaded
                    }
                </div>
            </div>
        );
    }
}

export default Content; // Exporting the Content component as the default export
