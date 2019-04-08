import React, { Component } from 'react';
import { Button, Checkbox, Form, Icon, Input, message, Spin } from 'antd';
import _ from 'lodash';
import { connect } from 'dva';

import  styles from './css/login.less';
import { Link } from 'react-router-dom';


const modelPlatformLogin = 'loginToNamespace/platformLogin';


@connect(({ loginToNamespace, loading }) => ({
  loginToNamespace,
  submitLoading: loading.effects[modelPlatformLogin],
}))
  @Form.create()
class Index extends Component {
  constructor(props) {
    super(props);
  }

 /* eventSubmit = () => {
    const username = _.trim(this.refs.username.value);
    const password = _.trim(this.refs.password.value);
    const { dispatch } = this.props;
    if (username === '') {
      message.error('用户名不能为空!');
    } else if (password === '') {
      message.error('密码不能为空!');
    } else {
      dispatch({
        type: modelPlatformLogin,
        payload: { username, password },
      });
    }
  };*/
  eventSubmit = e => {
    const { form, dispatch } = this.props;
    e.preventDefault();
    console.log(dispatch)
    form.validateFields((err, values) => {
      console.log(err,values)
      if (!err) {
        dispatch({
          type: 'loginToNamespace/platformLogin',
          payload: values
        });
      }
    });
  };

  render() {
    const { submitLoading ,form} = this.props;
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin/>;
    const { getFieldDecorator } = form;
    return (
      <div  className={styles.loginpage}>

          <Form onSubmit={this.eventSubmit}  className={styles.loginform}>
            <div className={styles.userimg}>

              <b>雷霆应急</b>
              <span>后台管理系统</span>
            </div>
            <Form.Item>
              {getFieldDecorator('username', {

                rules: [{ required: true, message: '请输入您的用户名' }]
              })(
                <Input
                  size="large"
                  prefix={<Icon type="user" />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {

                rules: [{ required: true, message: '请输入您的密码' }]
              })(
                <Input
                  size="large"
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>记住我</Checkbox>)}
              <Link className="login-form-forgot" to="#">
                忘记密码
              </Link>
                <Spin indicator={antIcon} spinning={submitLoading === true} >
                  <Input  type="submit" value={submitLoading === true ? '正在登录...' : '登录'} className={styles.spin}/>
                </Spin>

            </Form.Item>
          </Form>


          {/*<form>
            <input ref='username' type="text" className={styles['text']} placeholder={'username'} defaultValue='admin'/>
            <input ref='password' type="password" placeholder={'password'} defaultValue='123456'/>
          </form>*/}
          {/*<div className={styles['signin']}>
            <Spin indicator={antIcon} spinning={submitLoading === true}>
              <input onClick={this.eventSubmit} type="submit" value={submitLoading === true ? '正在登录...' : '登录'}/>
            </Spin>
          </div>*/}

      </div>
    );
  }
}


export default Index;


