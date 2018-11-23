import React, { Component } from 'react';
import './posts.css';
import PostsForm from '../PostsForm/PostsForm';

class BlogPosts extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            posts: [
                {
                    id: 214522112018,
                    title: 'Twitch | С чего начать',
                    img: 'https://m.media-amazon.com/images/G/01/DeveloperBlogs/AlexaBlogs/default/twitch_blog._CB476201729_.png',
                    text: 'Создание учетной записи Twitch позволяет вам взаимодействовать с владельцами каналов и сообществом посредством чата, отслеживать своих любимых стримеров и получать оповещения о начале прямых трансляций и, конечно же, вести трансляции для сообщества Twitch на своем собственном канале. Чтобы зарегистрировать учетную запись, перейдите по адресу https://www.twitch.tv и нажмите кнопку «Регистрация» в верхнем правом углу страницы.'
                }
            ]
        };
    };

    displayPost = ( post, index ) => {
        return (
           <div className="post-item" key={index}>
                <p className="post-item__title">
                   { post.title }
                </p>
                <img className="post-item__img"
                     src={ post.img }
                     alt={ post.title } 
                />
                <p className="post-item__text">
                    { post.text }
                </p>
           </div>
        )
    };

    addNewPost = ( post ) => {
        const posts = this.state.posts;
        posts.push(post);
        this.setState({ posts: posts })
    };

    render(){
        let posts = this.state.posts;
        let createdPosts = posts.map( this.displayPost );

        return(
            <div className="blogPosts-container">
                <div className="posts-container">
                    { createdPosts }
                </div>
                <div className="posts-form">
                    <PostsForm submit={this.addNewPost}/>
                </div>
            </div>
        );
    };
};

export default BlogPosts;