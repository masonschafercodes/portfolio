import React from 'react'
import '../App.css'
import marked from 'marked'

const Post = ({ article }) => {
    console.log(article)
    const name = article.fields.postname
    const description = marked(article.fields.description)
    const featuredImage = article.fields.featuredImage

    return (
        <div className="post pt-30">
            <h2 className="font-main color1">{ name }</h2>
            { featuredImage && <img className="featuredImage" src={ featuredImage.fields.file.url } alt={name} title={name} /> }
            <section className="desc" dangerouslySetInnerHTML={{ __html: description }} />
            <hr className="article-sep" />
        </div>
    )
}

export default Post
