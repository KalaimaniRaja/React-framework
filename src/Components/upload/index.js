import React from "react";
import "./upload.scss";

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
    };
  }

  componentDidMount() {
    console.log("props", this.props);
  }

  uploadEvent = (e) => {
    console.log(e.target.files);

    this.setState({
      file: URL.createObjectURL(e.target.files[0]),
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.file !== this.state.file) {
      console.log(this.state.file);
    }
  }

  render() {
    const { type } = this.props;

    return (
      <div
        className={
          type === "image"
            ? "upload-wrap image-upload"
            : type === "pdf"
            ? "upload-wrap pdf-upload"
            : "upload-wrap"
        }
      >
        {type === "image" && (
          <>
            <input type="file" onChange={this.uploadEvent} />
            {this.state.file && <img src={this.state.file} />}
          </>
        )}

        {type === "pdf" && (
          <>
            <input type="file" accept=".pdf" onChange={this.uploadEvent} />
            {this.state.file && <iframe src={this.state.file} />}
          </>
        )}
      </div>
    );
  }
}

export default Upload;
