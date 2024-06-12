import React, { Component } from "react"; // Importing React library and Component from 'react' module
import css from "./css/Content.module.css"; // Importing CSS Module for styling
import { savedPosts } from "../posts.json"; // Importing savedPosts array from posts.json file
import PostItem from "./PostItem"; // Importing the child component PostItem

// Defining a class component called Content
export class Content extends Component {
    constructor(props) {
        super(props); // Calling the constructor of the parent class (Component)
    }

    render() {
        return (
            <div className={css.Content}> {/* Rendering a div with className from CSS Module */}
                <div className={css.TitleBar}> {/* Rendering a div for the title bar */}
                    <h1>My Photos</h1> {/* Rendering a heading */}
                </div>

                <div className={css.SearchResults}> {/* Rendering a div for search results */}
                    {/* Part 1: Creating the map function to render posts */}
                    {/* Mapping through the savedPosts array to render each post */}
                    {/* For each post, rendering a div with post details */}
                    {/* Key attribute is used for optimization and performance */}
                    {/* This part is commented out because it's replaced by Part 2 */}
                    {/* {
                        savedPosts.map((post) => {
                            return (
                                <div className={css.SearchItem} key={post.title}>
                                    <p>{post.title}</p>
                                    <p>{post.name}</p>
                                    <img src={post.image} alt="random" />
                                    <p>{post.description}</p>
                                </div>
                            );
                        })
                    } */}

                    {/* Part 2: Rendering the child component PostItem */}
                    {/* Passing savedPosts array as props to the child component */}
                    <PostItem savedPosts={savedPosts} />
                </div>
            </div>
        );
    }
}

export default Content; // Exporting the Content component as the default export
