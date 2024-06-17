import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
    // Initialize state for loading status and fetched posts
    // What: `useState` is used to declare `isLoaded` and `fetchedPosts` state variables
    // Why: To manage the loading state and store fetched posts
    // How: `isLoaded` is initially false, `fetchedPosts` is initially an empty array
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    // useEffect hook to simulate fetching posts with a delay
    // What: `useEffect` is used to run side effects in functional components
    // Why: To fetch posts when the component mounts
    // How: Sets `isLoaded` to true and `fetchedPosts` to `savedPosts` after a 2-second delay
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000);
    }, []);

    // Handler function to filter posts based on search input
    // What: A function to filter posts by the author's name
    // Why: To update the displayed posts based on user input
    // How: Filters `savedPosts` by matching the search input with the post names
    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        });

        setFetchedPosts(filteredPosts);
    };

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchinput">Search</label>
                    <input
                        type="search"
                        id="searchinput"
                        onChange={handleChange}
                    />
                    <h4>Posts Found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? (
                    <PostItem savedPosts={fetchedPosts} />
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}

export default ContentHooks;
