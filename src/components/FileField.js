import React, { Component } from 'react';
import PetPic from './pets/PetPic';

class FileField extends Component {
  constructor(state) {
    super(state);
    this.state = {
      picture: null,
      pictureUrl: null
    };
  }

  render() {
    const { input } = this.props;
    delete input.value;
    return (
      <div>
        <div className="ui form">
          <label style={{ fontWeight: 'bold' }}>Enter a Pic:</label>
          <div className="col-sm-9">
            <input
              type="file"
              className="form-control"
              {...input}
              onChange={event => {
                this.displayPicture(event);
              }}
            />
          </div>
          <PetPic pictureUrl={this.state.pictureUrl} />
        </div>
      </div>
    );
  }

  displayPicture = event => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        picture: file,
        pictureUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };
}

export default FileField;
