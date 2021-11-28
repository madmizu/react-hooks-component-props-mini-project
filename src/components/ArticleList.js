import React from "react";
import Article from "./Article";

function ArticleList ({ posts }) {

const listOfPosts = posts.map (posts => {
    return (
        <Article
            key={posts.id}
            title={posts.title}
            data={posts.date}
            preview={posts.preview}
        />
    );
})
    return (
        <main>
            {listOfPosts}
        </main>
    );
}

export default ArticleList;