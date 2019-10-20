import React, {Component} from 'react';
import DropZone from 'react-dropzone';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      inputs: {
        name: '',
        heled_at: '',
        hobby: '',
        member_capacity: '',
        address: '',
        introduction: '',
      },
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDrop(file) {
    this.setState({image: file});
  }
  handleSubmit(e) {
    let params = new URLSearchParams();
    params.append('name', `${this.state.inputs.name}`);
    params.append('heled_at', `${this.state.inputs.heled_at}`);
    //params.append('image', `${this.state.image}`);
    params.append('hobby', `${this.state.inputs.hobby}`);
    params.append('member_capacity', `${this.state.inputs.member_capacity}`);
    params.append('address', `${this.state.inputs.address}`);
    params.append('introduction', `${this.state.inputs.introduction}`);

    axios
      .post('http://localhost:8000/event_api/event/', params)
      .then(function(response) {
        console.log(this.state.inputs);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(data) {
    console.log(data);
    this.setState({inputs: data.inputs});
  }

  render() {
    return (
      <FormControl>
        <label>イベント名</label>
        <Input
          name="name"
          value={this.state.inputs.name}
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, name: e.target.value},
            })
          }
        />
        <label>開催日</label>
        <Input
          name="heled_at"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, heled_at: e.target.value},
            })
          }
          value={this.state.inputs.heled_at}
        />
        <label>趣味</label>
        <Input
          name="hobby"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, hobby: e.target.value},
            })
          }
          value={this.state.inputs.hobby}
        />
        <label>メンバー人数</label>
        <Input
          name="member_capacity"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, member_capacity: e.target.value},
            })
          }
          value={this.state.inputs.member_capacity}
        />
        <label>クラン画像</label>
        <DropZone onDrop={file => this.handleDrop(file)}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>ここにdrop</p>
              </div>
            </section>
          )}
        </DropZone>
        {this.state.image.map(file => {
          return (
            <img
              alt="Preview"
              key={file.preview}
              src={URL.createObjectURL(file)}
              width="50px"
              height="50px"
            />
          );
        })}
        <label>イベント紹介</label>
        <Input
          name="introduction"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, introduction: e.target.value},
            })
          }
          value={this.state.inputs.introduction}
        />
        <label>住所</label>
        <Input
          name="address"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, address: e.target.value},
            })
          }
          value={this.state.inputs.address}
        />
        <Button variant="raised" onClick={this.handleSubmit}>
          Submit
        </Button>
      </FormControl>
    );
  }
}

export default CreateEvent;
