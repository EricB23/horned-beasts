import { Component } from 'react';
import HornedBeast from './HornedBeast';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Another Beast',
      imageUrl: 'imageUrl',
      description: 'description',
    };
  }
  render() {
    let array = [1, 2];
    let [test, subject] = array;
    let { name, imageUrl, description } = this.state;
    let url1 = 'laura-college-K_Na5gCmh38-unsplash.jpg';
    let url2 = 'nick-fewings-c4WBrQGR5q0-unsplash.jpg';
    return (
      <>
        <div> Gallery </div>
        <HornedBeast description="Deer in Forest" title="Deer" image={url1} />
        <HornedBeast
          description="Buck in Wilderness"
          title="Buck"
          image={url2}
        />
      </>
    );
  }
}
