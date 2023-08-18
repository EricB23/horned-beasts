import { Component } from 'react';

export default class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img alt="" src={this.props.image} />
        <div>Horned Beast</div>
        <p>{this.props.description}</p>
      </>
    );
  }
}
