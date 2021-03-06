import React, {Component} from 'react';
import DropZone from 'react-dropzone';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      inputs: {
        name: '',
        alias: '',
        hobby: '',
        place: '',
        email: '',
        date_of_birth: '',
        introduction: '',
      },
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8000/account_api/users/1/').then(response => {
      this.setState({
        inputs: response.data,
      });
      console.log('hello');
      console.table(this.state.inputs);
      console.log(this.state.inputs.name);
    });
  }

  handleDrop(file) {
    this.setState({image: file});
  }
  handleSubmit(e) {
    let params = new URLSearchParams();
    params.append('name', `${this.state.inputs.email}`);
    params.append('founded_date', `${this.state.inputs.date_of_birth}`);
    //params.append('image', `${this.state.image}`);
    params.append('point', `${this.state.inputs.alias}`);
    params.append('introduction', `${this.state.inputs.introduction}`);
    params.append('hobby', `${this.state.inputs.hobby}`);
    params.append('place', `${this.state.inputs.place}`);

    axios
      .put('http://localhost:8000/account_api/users/1', params)
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
        <label>名前</label>
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
        <label>ニックネーム</label>
        <Input
          name="alias"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, alias: e.target.value},
            })
          }
          value={this.state.inputs.alias}
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
        <label>住んでるところ</label>
        <Input
          name="place"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, place: e.target.value},
            })
          }
          value={this.state.inputs.place}
        />
        <label>Eメール</label>
        <Input
          name="email"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, email: e.target.value},
            })
          }
          value={this.state.inputs.email}
        />
        <label>誕生日</label>
        <Input
          name="birthday"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, date_of_birth: e.target.value},
            })
          }
          value={this.state.inputs.date_of_birth}
        />
        <label>プロフィール画像</label>
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
        <label>自己紹介</label>
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

export default UpdateProfile;
