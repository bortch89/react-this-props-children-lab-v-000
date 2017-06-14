import React from 'react';

export default class Invitation extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return (
        <div>{child}</div>
      );
    });

    return (
      <div className="invitation">
        <h1>You've been invited!</h1>
        {children}
      </div>
    );
  }
}
