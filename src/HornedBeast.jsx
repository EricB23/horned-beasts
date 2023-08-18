import { Component } from 'react';

export default class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img alt="" src={this.props.image} />
        <title>Horned Beast</title>
        <p>{this.props.description}</p>
      </>
    );
  }
}
