import React, { Component } from 'react';
import { Row, Col, Table, Modal } from 'antd';
import SRDetails from './SRDetails';
import '../table.css';

class ServiceRequest extends Component {
  state = {
    modalVisibility: false,
    width: '0',
    height: '0'
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const modalSize = (this.state.width > 600) ? 600 : 450;
    const columns = [
      { title: 'No', width: '10%', dataIndex: 'no', key: 'no'},
      { title: 'Name', width: '20%', dataIndex: 'name', key: 'name'},
      { title: 'Department', width: '20%', dataIndex: 'department', key: 'department'},
      { title: 'Type', width: '30%', dataIndex: 'type', key: 'type'},
      { title: 'Elapsed', width: '30%', dataIndex: 'elapsed', key: 'elapsed'}
    ]
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        no: i+1,
        key: i,
        name: `John ${i}`,
        department: 'Dept',
        type: 'Not your type',
        elapsed: '1 hr'
      })
    }
    return(
      <div>
        <Row gutter={16}>
          <Col lg={{span:9, offset:3}} sm={{span:24}}>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                <strong>New</strong> <br/>
                <Table size="small" columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false}
                  className="padding-row row-class"
                  onRowClick={() => { this.setState({modalVisibility: true}); }} />
                </Col>
            </Row>
            <br/>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                <strong>In Progress</strong> <br/>
                <Table size="small" columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false} />
              </Col>
            </Row>
          </Col>
          <Col lg={{span:9}} sm={{span:24}}>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                <strong>Cleared</strong> <br/>
                <Table size="small" columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false} />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                <strong>Completed</strong> <br/>
                <Table size="small" columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal
           title="Title" visible={this.state.modalVisibility}
           onCancel={() => { this.setState({modalVisibility: false})}}
           width={modalSize}>
           <SRDetails />
        </Modal>
      </div>
    )
  }
}

export default ServiceRequest;
