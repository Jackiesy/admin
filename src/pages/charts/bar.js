import React, { Component, Fragment } from 'react';
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { Bar } from '../../component/AntV';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
    {
      year: '1951 年',
      sales: 38
    }, {
      year: '1952 年',
      sales: 52
    }, {
      year: '1956 年',
      sales: 61
    }, {
      year: '1957 年',
      sales: 145
    }, {
      year: '1958 年',
      sales: 48
    }, {
      year: '1959 年',
      sales: 38
    }, {
      year: '1960 年',
      sales: 38
    }, {
      year: '1962 年',
      sales: 38
    }
    ];
    const data2 = [
      {
        name: '可乐',
        year: '1999 年',
        volume: 38,
      }, {
        name: '可乐',
        year: '2000 年',
        volume: 52,
      }, {
        name: '可乐',
        year: '2001 年',
        volume: 61,
      }, {
        name: '雪碧',
        year: '1999 年',
        volume: 77,
      }, {
        name: '雪碧',
        year: '2000 年',
        volume: 66,
      }, {
        name: '雪碧',
        year: '2001 年',
        volume: 99,
      }
    ];
    const data3 = [
      {
        name: '可乐',
        year: '1999 年',
        volume: 38,
      }, {
        name: '可乐',
        year: '2000 年',
        volume: 52,
      }, {
        name: '可乐',
        year: '2001 年',
        volume: 61,
      }, {
        name: '雪碧',
        year: '1999 年',
        volume: 77,
      }, {
        name: '雪碧',
        year: '2000 年',
        volume: 66,
      }, {
        name: '雪碧',
        year: '2001 年',
        volume: 99,
      }
    ];
    return (
      <Fragment>
        <Card style={{ margin: 30, textAlign: 'center' }}>
          <h1>antV 柱状图展示</h1>
        </Card>
        <div style={{ margin: 30 }}>
          <Row
            align="top"
            justify="start"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            type="flex"
          >
            <Col span={12}>
              <Card>
                <Bar
                  nodeId={'bar'}
                  data={data}
                  height={250}
                  title={'82年可乐销量'}
                  scale={40}
                  axis={{ x: 'year', y: 'sales', xTitle: '年份', yTitle: '销量(t)' }}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <h2>基础柱状体</h2>
                <h3><span style={{ color: 'red' }}>nodeId</span> : 图表容器第id,唯一键不能出现相同</h3>
                <h3><span style={{ color: 'red' }}>data</span> : 图表数据</h3>
                <h3><span style={{ color: 'red' }}>height</span> : 图表高度,可根据宽度自己调整</h3>
                <h3><span style={{ color: 'red' }}>title</span> : 图表标题</h3>
                <h3><span style={{ color: 'red' }}>scale</span> : y轴坐标刻度间隔</h3>
                <h3><span style={{ color: 'red' }}>axis</span> : x和y轴对应data的字段</h3>
              </Card>
            </Col>
          </Row>

          <Row
            align="top"
            justify="start"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            type="flex"
            style={{ marginTop: 30 }}
          >
            <Col span={12}>
              <Card>
                <Bar
                  nodeId={'bar2'}
                  data={data2}
                  height={250}
                  title={'82年雪碧销量'}
                  scale={40}
                  axis={{ x: 'year', y: 'volume', yTitle: '销量(t)', groupField: 'name' }}
                  type='group'
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <h2>分组柱状图</h2>
                <h3><span style={{ color: 'red' }}>nodeId</span> : 图表容器第id,唯一键不能出现相同</h3>
                <h3><span style={{ color: 'red' }}>data</span> : 图表数据</h3>
                <h3><span style={{ color: 'red' }}>height</span> : 图表高度,可根据宽度自己调整</h3>
                <h3><span style={{ color: 'red' }}>title</span> : 图表标题</h3>
                <h3><span style={{ color: 'red' }}>scale</span> : y轴坐标刻度间隔</h3>
                <h3><span style={{ color: 'red' }}>axis</span> : .x和.y轴对应data的字段,.xTitle X轴标题,.yTitle Y轴标题,.groupField
                  如果是分组模式,根据那个数据中哪个字段进行分组</h3>
              </Card>
            </Col>
          </Row>

          <Row
            align="top"
            justify="start"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            type="flex"
            style={{ marginTop: 30 }}
          >
            <Col span={12}>
              <Card>
                <Bar
                  nodeId={'bar3'}
                  data={data3}
                  height={250}
                  title={'82年雪碧销量'}
                  scale={40}
                  axis={{ x: 'year', y: 'volume', yTitle: '销量(t)', groupField: 'name' }}
                  type='stack'
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <h2>堆叠柱状图</h2>
                <h3><span style={{ color: 'red' }}>nodeId</span> : 图表容器第id,唯一键不能出现相同</h3>
                <h3><span style={{ color: 'red' }}>data</span> : 图表数据</h3>
                <h3><span style={{ color: 'red' }}>height</span> : 图表高度,可根据宽度自己调整</h3>
                <h3><span style={{ color: 'red' }}>title</span> : 图表标题</h3>
                <h3><span style={{ color: 'red' }}>scale</span> : y轴坐标刻度间隔</h3>
                <h3><span style={{ color: 'red' }}>axis</span> : .x和.y轴对应data的字段,.xTitle X轴标题,.yTitle Y轴标题,.groupField
                  如果是分组模式,根据那个数据中哪个字段进行分组</h3>
              </Card>
            </Col>
          </Row>

          <Row
            align="top"
            justify="start"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            type="flex"
            style={{marginTop:30}}
          >
            <Col span={12}>
              <Card>
                <Bar
                  nodeId={'bar4'}
                  data={data}
                  height={250}
                  title={'82年可乐销量'}
                  scale={40}
                  axis={{ x: 'year', y: 'sales', xTitle: '年份', yTitle: '销量(t)' }}
                  transpose={true}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <h2>横向基础柱状体(数据太多的话横向很丑)</h2>
                <h3><span style={{ color: 'red' }}>nodeId</span> : 图表容器第id,唯一键不能出现相同</h3>
                <h3><span style={{ color: 'red' }}>data</span> : 图表数据</h3>
                <h3><span style={{ color: 'red' }}>height</span> : 图表高度,可根据宽度自己调整</h3>
                <h3><span style={{ color: 'red' }}>title</span> : 图表标题</h3>
                <h3><span style={{ color: 'red' }}>scale</span> : y轴坐标刻度间隔</h3>
                <h3><span style={{ color: 'red' }}>axis</span> : x和y轴对应data的字段</h3>
                <h3><span style={{ color: 'red' }}>transpose</span> : transpose等于true时,横向显示图表</h3>
              </Card>
            </Col>
          </Row>

          <Row
            align="top"
            justify="start"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            type="flex"
            style={{ marginTop: 30 }}
          >
            <Col span={12}>
              <Card>
                <Bar
                  nodeId={'bar5'}
                  data={data2}
                  height={250}
                  title={'82年雪碧销量'}
                  scale={40}
                  axis={{ x: 'year', y: 'volume', yTitle: '销量(t)', groupField: 'name' }}
                  type='group'
                  transpose={true}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <h2>横向分组柱状图</h2>
                <h3><span style={{ color: 'red' }}>nodeId</span> : 图表容器第id,唯一键不能出现相同</h3>
                <h3><span style={{ color: 'red' }}>data</span> : 图表数据</h3>
                <h3><span style={{ color: 'red' }}>height</span> : 图表高度,可根据宽度自己调整</h3>
                <h3><span style={{ color: 'red' }}>title</span> : 图表标题</h3>
                <h3><span style={{ color: 'red' }}>scale</span> : y轴坐标刻度间隔</h3>
                <h3><span style={{ color: 'red' }}>axis</span> : .x和.y轴对应data的字段,.xTitle X轴标题,.yTitle Y轴标题,.groupField
                  如果是分组模式,根据那个数据中哪个字段进行分组</h3>
              </Card>
            </Col>
          </Row>

          <Row
            align="top"
            justify="start"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            type="flex"
            style={{ marginTop: 30 }}
          >
            <Col span={12}>
              <Card>
                <Bar
                  nodeId={'bar6'}
                  data={data3}
                  height={250}
                  title={'82年雪碧销量'}
                  scale={40}
                  axis={{ x: 'year', y: 'volume', yTitle: '销量(t)', groupField: 'name' }}
                  type='stack'
                  transpose={true}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <h2>横向堆叠柱状图</h2>
                <h3><span style={{ color: 'red' }}>nodeId</span> : 图表容器第id,唯一键不能出现相同</h3>
                <h3><span style={{ color: 'red' }}>data</span> : 图表数据</h3>
                <h3><span style={{ color: 'red' }}>height</span> : 图表高度,可根据宽度自己调整</h3>
                <h3><span style={{ color: 'red' }}>title</span> : 图表标题</h3>
                <h3><span style={{ color: 'red' }}>scale</span> : y轴坐标刻度间隔</h3>
                <h3><span style={{ color: 'red' }}>axis</span> : .x和.y轴对应data的字段,.xTitle X轴标题,.yTitle Y轴标题,.groupField
                  如果是分组模式,根据那个数据中哪个字段进行分组</h3>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

BarChart.propTypes = {};

export default BarChart;
