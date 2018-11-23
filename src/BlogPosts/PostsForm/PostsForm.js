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
        let { value, name } = e.target;

        if ( value !== '' ) {
            let newPostState = this.state.newPost;
            let newPost = Object.assign( newPostState, { [name]: value });

            this.setState({ newPost: newPost });
        };
    };

    submittingPostForm = ( e ) => {
        e.preventDefault();
        
        let posts = this.state.newPost;
        let postWithId = Object.assign( posts, { id: Date.now() });

        this.props.submit(postWithId);
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