import React, { Component } from 'react';
import './posts.css';
import PostsForm from '../PostsForm/PostsForm';

class BlogPosts extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            posts: [
                {
                    id: 224423112018,
                    title: 'Twitch | С чего начать',
                    img: 'https://m.media-amazon.com/images/G/01/DeveloperBlogs/AlexaBlogs/default/twitch_blog._CB476201729_.png',
                    text: 'Создание учетной записи Twitch позволяет вам взаимодействовать с владельцами каналов и сообществом посредством чата, отслеживать своих любимых стримеров и получать оповещения о начале прямых трансляций и, конечно же, вести трансляции для сообщества Twitch на своем собственном канале. Чтобы зарегистрировать учетную запись, перейдите по адресу https://www.twitch.tv и нажмите кнопку «Регистрация» в верхнем правом углу страницы.'
                },
                {
                    id: 224723112018,
                    title: 'LocalStorage на пальцах',
                    img: 'https://www.robinwieruch.de/img/posts/local-storage-react/banner_1024.jpg',
                    text: 'Чтобы понять, что такое localStorage, просто представьте, что где-то у вас в браузере встроен такой объект, которым мы можем пользоваться. При этом данный объект не очищает значения, которые мы туда запишем, если мы перезагрузим страницу или даже совсем закроем браузер. Если говорить языком JavaScript, то localStorage это свойство глобального объекта браузера (window). К нему можно обращаться как window.localStorage или просто localStorage.'
                }
            ]
        };
    };

    displayPost = ( post) => {
        return (
           <div className="post-item" key={post.id}>
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
                <div
                    className="delete-post-btn"
                    onClick={ () => this.deletePost(post.id) }>
                    Delete Post
                </div>
           </div>
        )
    };

    deletePost = ( id ) => {
        let filteredPosts = this.state.posts.filter( function(item) {
            return ( item.id !== id)
          });

        this.setState({
        posts: filteredPosts,
        })
    }

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