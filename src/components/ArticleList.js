import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const posts = props.posts
    const posting = 
        posts.map((post) => { 
            return(
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
            );
        })
    
    return (
        <main>
            {posting}
        </main>
    );
}

export default ArticleList