import React, { Component } from 'react';
import './postsForm.css';

class PostsForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            posts: [],
            title: '',
            img: '',
            text: '',
        };
    };

    handleChange = ( event ) => {
        const { value, name } = event.target;
        
        this.setState({ [name]: value });

        // const newPost = {};
        // if ( name === 'title') newPost.title = value;
        // if ( name === 'img') newPost.img = value;
        // if ( name === 'text') newPost.text = value;
    
    }

    render(){
        return(
            <form className="postsForm" onSubmit={ () => this.submittingPostForm }>
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
                <button type="submit">to post!</button>
            </form>
        );
    };
};

export default PostsForm;