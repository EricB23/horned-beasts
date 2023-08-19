import { Component } from 'react';

export default class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.image}
          alt={this.props.description}
          title={this.props.title}
        />

        <p>{this.props.description}</p>
      </>
    );
  }
}
