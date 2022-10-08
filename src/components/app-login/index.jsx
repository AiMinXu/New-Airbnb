import React, { memo } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import { WechatOutlined, MailOutlined } from '@ant-design/icons';
import { LoginAndRegiserWrapper } from './style'
import { useNavigate } from 'react-router-dom';
import xamRequest from '@/services';


const { Option } = Select;
const LoginAndRegister = memo((props) => {
  const { path } = props

  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    xamRequest.post(values).then(res => {
      navigate('/home')
    }).catch(err => {
      console.log(err);
    })
  };

  return (
    <LoginAndRegiserWrapper>
      <div className="content">
        <div className="loginAndRegisterBox">
          <div className='title1'>
            <h2>{path === '/login' ? '登录' : '注册'}爱彼迎</h2>
            <p>未注册的手机号或微信号验证后将自动创建新账号</p>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              confirm: false,
            }}
            onFinish={onFinish}
          >
            <Form.Item >
              <Input.Group compact className='group'>
                <Form.Item
                  name={['phone', 'header']}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请选择',
                    },
                  ]}
                  initialValue={"+1"}
                >
                  <Select style={{ width: '60px', marginRight: '10px' }} >
                    <Option value="+1">+1</Option>
                    <Option value="+86">+86</Option>
                    <Option value="+10086">+10086</Option>
                    <Option value="+996">+996</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name={['number', 'number']}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入手机号',
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: '85%',
                      marginRight: '-10px'
                    }}
                    className='item'
                    placeholder="手机号"
                    suffix={<Button style={{ border: "none", marginRight: "-10px" }}>发送验证码</Button>}
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item
              name="yanzhengma"
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
            >
              <Input
                type="text"
                placeholder="验证码"
                className='item'
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                立即登录
              </Button>
              <div className="or">
                <span className='text'>或</span>
              </div>
              <Button type="link" className='register-form-button'>
                <WechatOutlined className='wechat' />
                <a href="/register" type='link'>立即注册</a>
              </Button>
              <div className="or">
                <span className='text'>使用其他方式</span>
              </div>
              <Button type="link" className='other-form-button'>
                <MailOutlined className='mail' />
                <a href="/register" type='link'>账号密码登录</a>
              </Button>
            </Form.Item>
            <Form.Item>
              <Form.Item name="confirm " valuePropName="checked" noStyle>
                <Checkbox>
                  我确认已年满18周岁、且已认真阅读并同意接受爱彼迎
                  <a href="/">《服务条款》</a>
                  、<a href="/">《隐私政策》</a>和<a href="/">《非歧视政策》</a>。
                </Checkbox>
              </Form.Item>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginAndRegiserWrapper>
  )
})

export default LoginAndRegister
