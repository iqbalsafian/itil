import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';
import ServiceRequest from './ServiceRequest'
const { Header, Footer, Content} = Layout;
const TabPane = Tabs.TabPane;

class MainPage extends Component {
  callback() {}
  render() {
    return(
      <div>
        <Header className="centering-text" style={{height:'40px'}}>
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
        <Footer className="centering-text footer">Footer</Footer>
      </div>
    )
  }
}

export default MainPage;
