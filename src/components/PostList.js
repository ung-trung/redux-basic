import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from './action';

import UserHeader from './UserHeader';

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  render() {
    return (
      <h1 className="ui relaxed divided list">
        {this.props.posts.map(post => (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        ))}
      </h1>
    );
  }
}

const mapStateToProps = store => {
  return { posts: store.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
