import React from 'react'

class PostForm extends React.Component{

  state = {
    postTitle : '',
    postBody: ''
  }

  onSubmit = (e) => {
    e.preventDefault()

    let postData = {
      title: this.state.postTitle,
      body: this.state.postBody
    }


  }


  render(){
    return(
      <div>
        <h1>Add new post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" 
                   name="title" 
                   value = {this.state.postTitle}
                   onChange={ (e) => { 
                      this.setState({postTitle: e.target.value})}
                   }/>
          </div>
          <br/>
          <div>
            <label>Body:</label>
            <textarea type="text" 
                      name="body"
                      value = {this.state.postBody}
                      onChange={ (e) => { 
                        this.setState({postBody: e.target.value})}
                      }></textarea>
          </div>
          <button type="submit"> Submit!! </button>
        </form>
      </div>
    )
  }
}

export default PostForm