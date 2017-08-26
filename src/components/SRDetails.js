import React, { Component } from 'react';
import { Row, Col, Form, Input, Tabs } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class SRDetails extends Component {
  render() {
    return(
      <div>
        <Form>
          <Row gutter={16}>
            <Col
              sm={{span:22, offset: 1}}
              md={{span:11, offset: 0}}>
              <Row gutter={8}>
                <Col sm={{span:10, offset: 1}} md={{span:10, offset: 1}}>
                  First Name
                </Col>
                <Col sm={{span:10, offset: 0}} md={{span:10, offset: 0}}>
                  Actual Name
                </Col>
              </Row>
              <Row gutter={8}>
                <Col sm={{span:10, offset: 1}} md={{span:10, offset: 1}}>
                  Last Name
                </Col>
                <Col sm={{span:10, offset: 0}} md={{span:10, offset: 0}}>
                  Actual Name
                </Col>
              </Row>
              <Row gutter={8}>
                <Col sm={{span:10, offset: 1}} md={{span:10, offset: 1}}>
                  Department
                </Col>
                <Col sm={{span:10, offset: 0}} md={{span:10, offset: 0}}>
                  Actual Name
                </Col>
              </Row>
            </Col>
            <Col
              sm={{span:22, offset: 1}}
              md={{span:11, offset: 0}}>
              <Row gutter={8}>
                <Col sm={{span:10, offset: 1}} md={{span:10, offset: 1}}>
                  Email
                </Col>
                <Col sm={{span:10, offset: 0}} md={{span:10, offset: 0}}>
                  @email.com
                </Col>
              </Row>
              <Row gutter={8}>
                <Col sm={{span:10, offset: 1}} md={{span:10, offset: 1}}>
                  Phone No
                </Col>
                <Col sm={{span:10, offset: 0}} md={{span:10, offset: 0}}>
                  324234234
                </Col>
              </Row>
              <Row gutter={8}>
                <Col sm={{span:10, offset: 1}} md={{span:10, offset: 1}}>
                  Extension
                </Col>
                <Col sm={{span:10, offset: 0}} md={{span:10, offset: 0}}>
                  Tension
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="1" onChange="" className="centering-text">
                <TabPane tab="Incident Details" key="1">
                  Type of S.R
                  Description
                  Remarks
                </TabPane>
                <TabPane tab="Assignee" key="2">
                  Department: Asignee
                </TabPane>
                <TabPane tab="Knowledge Base" key="3">
                  Turn Off Router
                </TabPane>
                <TabPane tab="Escalation" key="4">
                  Create Problems
                  Request for Change
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default SRDetails;
