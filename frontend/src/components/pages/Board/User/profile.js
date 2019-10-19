import React from 'react';
import DropZone from 'react-dropzone';
import axios from 'axios';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      inputs: {
        name: '',
        alies: '',
        hobby: '',
        address: '',
        email: '',
        birthday: '',
        introduce: '',
      },
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDrop(file) {
    this.setState({image: file});
  }
  handleSubmit(e) {
    axios
      .post('http://localhost:8000/account_api/users/', {
        email: this.state.inputs.email,
        date_of_birth: this.state.inputs.birthday,
        name: this.state.inputs.name,
        alias: this.state.inputs.alies,
        image: this.state.image[0],
        hobby: this.state.inputs.hobby,
        place: this.state.inputs.address,
      })
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
      <Form>
        <label>名前</label>
        <Input
          name="name"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, name: e.target.value},
            })
          }
          // 差分のみを適用
          defaultValue={this.state.inputs['name']}
        />
        <label>ニックネーム</label>
        <Input
          name="alies"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, alies: e.target.value},
            })
          }
          defaultValue={this.state.inputs['alies']}
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
          defaultValue={this.state.inputs['hobby']}
        />
        <label>住んでるところ</label>
        <Input
          name="address"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, address: e.target.value},
            })
          }
          defaultValue={this.state.inputs['address']}
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
          defaultValue={this.state.inputs['email']}
        />
        <label>誕生日</label>
        <Input
          name="birthday"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, birthday: e.target.value},
            })
          }
          defaultValue={this.state.inputs['birthday']}
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
        <TextareaAutosize
          name="introduce"
          onChange={e =>
            this.handleChange({
              ...this.state,
              inputs: {...this.state.inputs, introduce: e.target.value},
            })
          }
          defaultValue={this.state.inputs['introduce']}
        />
        <Button variant="raised" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Profile;
