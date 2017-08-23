import React, { Component } from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
const FormItem = Form.Item;

class LoginPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return(
      <div style={{position: 'absolute', margin: '0', top: '50%', right: '50%', transform: 'translate(50%,-50%)'}}>
        <Card style={{ width: '350px' }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
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
