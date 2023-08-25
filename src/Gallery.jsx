import { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div> Gallery </div>
        {data.map((element) => (
          <HornedBeast
            description={element.description}
            title={element.title}
            image={element.image_url}
            key={element._id}
            handleOpen={this.props.handleOpen}
            getBeast={this.props.getBeast}
          />
        ))}
        ;
      </>
    );
  }
}
