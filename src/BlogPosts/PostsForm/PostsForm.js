import React, { Component } from 'react';
import './postsForm.css';

class PostsForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            newPost: {},
        };
        this.submittingPostForm = this.submittingPostForm.bind(this);
    };

    handleChange = ( e ) => {
        const { value, name } = e.target;
        let newPostState = this.state.newPost
        let newPost = Object.assign( newPostState, { [name]: value })
        this.setState({ newPost: newPost });
    };

    submittingPostForm = ( e ) => {
        e.preventDefault();
        const posts = this.state.newPost;
        this.props.submit(posts);
        this.setState({ newPost: {} });
    };

    render(){
        return(
            <form className="postsForm" onSubmit={ (e) => this.submittingPostForm(e) }>
                <p className="postsForm__title">Create your NEW post</p>
                <div className="postsForm__inputs-wrp">
                    <input 
                        onChange={this.handleChange}
                        placeholder="Enter a title of post"
                        name="title"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="Enter a link on image"
                        name="img"
                    />
                </div>
                <textarea 
                    onChange={this.handleChange}
                    placeholder="type text of your post"
                    name="text"
                />
                <input
                    className="postsForm__btn"
                    type="submit"
                    value="to post!"/>
            </form>
        );
    };
};

export default PostsForm;