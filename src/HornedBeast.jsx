import { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: '',
    };
  }
  clickHandler = () => {
    this.setState({ clicks: this.state.clicks + '❤️' });
  };
  render() {
    console.log(this.state.clicks.length);
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image
          src={this.props.image}
          alt={this.props.description}
          onClick={this.clickHandler}
          fluid
        />

        <p>{this.props.description}</p>
        <p>{this.state.clicks}</p>
      </>
    );
  }
}
