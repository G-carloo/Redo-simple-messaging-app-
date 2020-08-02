import React, { Component } from "react";

class Upload extends Component {
  render() {
    return (
      <div id='Up' className='cm'>
        <h2 id='Up'>Upload Something</h2>
        <input type='file' onChange={this.selectfile} />
      </div>
    );
  }
}

export default Upload;
