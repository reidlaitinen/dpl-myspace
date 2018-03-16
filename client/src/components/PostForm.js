import React from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions/posts'

class PostForm extends React.Component {

  defaultValues = { text: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let post = { ...this.state, user_id: this.props.author.id }
    this.props.dispatch(addPost(post))
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render() {
    return (
      <form>
        <input id="text" type="text" onChange={this.handleChange} value={this.state.text} />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { author: state.user }
}

export default connect(mapStateToProps)(PostForm);