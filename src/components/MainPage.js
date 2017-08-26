import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Tabs, Button } from 'antd';
import ServiceRequest from './ServiceRequest'
import { logout } from '../actions/authentication';
const { Header, Footer, Content} = Layout;
const TabPane = Tabs.TabPane;

class MainPage extends Component {
  callback() {}
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.reRender();
  }
  render() {
    return(
      <div>
        <Header className="centering-text" style={{height:'40px'}}>
          <Button type='primary' icon="logout" onClick={this.handleLogout}>Logout</Button>
        </Header>
        <Content className="centering-text">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Service Request" key="1">
              <ServiceRequest />
            </TabPane>
            <TabPane tab="Incidents" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Problems" key="3">Content of Tab Pane 3</TabPane>
            <TabPane tab="Change" key="4">Content of Tab Pane 3</TabPane>
            <TabPane tab="Release" key="5">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Content>
        <Footer className="centering-text footer" style={{textAlign:'center', width: '100%'}}>
          CopyYour Rights forever!
        </Footer>
      </div>
    )
  }
}

MainPage.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect((state) => { return {}}, { logout })(MainPage);
