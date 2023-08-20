import { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let url1 = data[0].image_url;
    let url2 = data[1].image_url;
    console.log(data);
    return (
      <>
        <div> Gallery </div>
        <HornedBeast
          description={data[0].description}
          title={data[0].title}
          image={url1}
        />
        <HornedBeast
          description={data[1].description}
          title={data[1].title}
          image={url2}
        />
      </>
    );
  }
}
