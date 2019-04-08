import React, { Component, Fragment } from 'react';
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { Pie } from './../../component/AntV';

class PieCharts extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {
    const data = [
      {
      item: '事例一',
      percent: 0.4,
    }, {
      item: '事例二',
      percent: 0.4,
    },{
      item: '事例三',
      percent: 0.2,
    }];
    const data2 = [
      {
      title: '评估中',
      value: 111,
      percent: 0.23
    }, {
      title: '设计中',
      value: 140,
      percent: 0.28
    }, {
      title: '正在开发',
      value: 150,
      percent: 0.30
    }, {
      title: '已上线',
      value: 95,
      percent: 0.19
    }];
    return (
      <Fragment>
        <Card style={{ margin: 30 }}>
          <h1 style={{ textAlign: 'center' }}>Antv 饼状图</h1>
        </Card>

        <Row style={{ margin: 30 }}>
          <Col span={12}>
            <Card>
              <Pie
                title={'基础饼图'}
                id={'basePie'}
                height={400}
                data={data}
                axis={{title:'item',percent:'percent'}}
                type={'base'}
              />
            </Card>
          </Col>

          <Col span={11} offset={1}>
            <Card>
              <h3><span style={{color:'red'}}>id</span>: 渲染图表绑定dom的id,重复报错</h3>
              <h3><span style={{color:'red'}}>height</span>: 渲染的div的高度</h3>
              <h3><span style={{color:'red'}}>data</span>: 图表数据</h3>
              <h3><span style={{color:'red'}}>axis</span>:Object 数据字段-title:条目标题 percent:条目占比</h3>
              <h3><span style={{color:'red'}}>type</span>:String 饼图类型(基础类型:base,环形类型:rang)</h3>
            </Card>
          </Col>
        </Row>

        <Row style={{ margin: 30 }}>
          <Col span={12}>
            <Card>
              <Pie
                title={'环状饼图'}
                id={'rangPie'}
                height={400}
                data={data2}
                axis={{title:'title',percent:'percent'}}
                type={'rang'}
              />
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

PieCharts.propTypes = {};

export default PieCharts;
