import React, { Component } from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import validator from 'validator';

class LoginPage extends Component {
  state = {
    email: '', password: '', errors: { email: '', password: '' }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    // if (validator.isEmail(this.state.email))
    //   this.setState({
    //     errors: {email: 'Email is not well formatted', password: this.state.errors.password}
    //   })
    // if (validator.isEmpty(this.state.password))
    //   this.setState({
    //     errors: {password: 'Password cannot be empty', email: this.state.errors.email}
    //   })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const FormItem = Form.Item;
    return(
      <div style={{position: 'absolute', margin: '0', top: '50%', right: '50%', transform: 'translate(50%,-50%)'}}>
        <Card style={{ width: '350px' }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {
                (this.state.errors.email !== '')
                ? <span>{this.state.errors.email}</span>
                : ''
              }
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Email"
                id="email" name="email" onChange={this.handleChange} />
            </FormItem>
            <FormItem>
              {
                (this.state.errors.password !== '')
                ? <span>{this.state.errors.email}</span>
                : ''
              }
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"
               onChange={this.handleChange} />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default LoginPage;
