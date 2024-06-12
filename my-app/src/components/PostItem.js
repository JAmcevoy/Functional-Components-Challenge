import React from "react"; // Importing React library
import css from "./css/PostItem.module.css"; // Importing CSS Module for styling

// Defining a functional component called PostItem
function PostItem(props) {
    return (
        // Mapping through the savedPosts array passed as props
        props.savedPosts.map(post => {
            // Extra task: Destructuring post object to access its properties
            const { title, name, image, description } = post;
            return (
                <div className={css.SearchItem} key={title}> {/* Rendering a div with className from CSS Module and using post title as key */}
                    <p>{title}</p> {/* Rendering post title */}
                    <p>{name}</p> {/* Rendering post name */}
                    <img src={image} alt="random" /> {/* Rendering post image */}
                    <p>{description}</p> {/* Rendering post description */}
                </div>
            );
        })
    );
}

export default PostItem; // Exporting the PostItem component as the default export
