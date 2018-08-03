import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetch_post } from '../actions/postActions'

class Post extends React.Component {

  componentWillMount(){
    this.props.fetch_post()
  }

  render(){
    let postData = this.props.posts.map( post => {
      return(
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )
    })

    return(
      <div>
        <h1>Posts!!!</h1>
        {postData}
      </div>
    )
  }
}

Post.propTypes = {
  fetch_post: PropTypes.func.isRequired, //fetchPost es una funcion y es requerida (asi lo estamos definiendo)
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.items,
  }
)

export default connect(mapStateToProps, {fetch_post})(Post);