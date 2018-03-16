import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

class PostList extends React.Component {
  state = { posts: []}

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    const { posts } = this.state
    return (
      posts.map( p => (
        <div>
          <h3>Post author: {p.user_id}</h3>
          <p>Post text: {p.text}</p>
        </div>
      )
    )
  )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(PostList);