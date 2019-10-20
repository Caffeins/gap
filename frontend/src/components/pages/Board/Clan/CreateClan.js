import React, {Component} from 'react';
import DropZone from 'react-dropzone';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class CreateClan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      inputs: {
        name: '',
        founded_date: '',
        point: '',
        introduction: '',
        hobby: '',
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
    params.append('founded_date', `${this.state.inputs.founded_date}`);
    //params.append('image', `${this.state.image}`);
    params.append('point', `${this.state.inputs.point}`);
    params.append('introduction', `${this.state.inputs.introduction}`);
    params.append('hobby', `${this.state.inputs.hobby}`);

    axios
      .post('http://localhost:8000/clan_api/clans/', params)
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
        <label>クラン名</label>
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
        <label>設立日</label>
        <Input
          name="alias"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, founded_date: e.target.value},
            })
          }
          value={this.state.inputs.founded_date}
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
          value={this.state.inputs['hobby']}
        />
        <label>ポイント</label>
        <Input
          name="point"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, point: e.target.value},
            })
          }
          value={this.state.inputs.point}
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
        <label>クラン紹介</label>
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
        <Button variant="raised" onClick={this.handleSubmit}>
          Submit
        </Button>
      </FormControl>
    );
  }
}

export default CreateClan;
