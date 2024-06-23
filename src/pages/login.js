import { Button, Card, Divider, Form, Input, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import ReactCaptcha from 'modern-react-captcha';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import styles from './login.module.scss'
import Title from 'antd/es/typography/Title';
const Login = () => {
    const [captcha, setCaptcha] = useState();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();



    useEffect(()=>{
        generateRandomNumber();
    },[])


    const handleOnFinish = (values) => {

        if (values?.username && values?.password) {
            toast.success("Logged in successfully");
            // sessionStorage.setItem("isUserLogged", true);
            Cookies.set('isUserLogged', true, { expires: 7 });
            navigate('/home')
        } else {
            navigate('/login')
            toast.error("User name or password incorrect");
        }
    };

    const generateRandomNumber =()=> {
        const captcha = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

        return setCaptcha(captcha.toString())
      }

    return (
        <div className={styles.loginWrapper}>
            <Toaster />
            <Card
                hoverable
                style={{
                    width: 440,
                }}
            >
                <Title style={{ textAlign: 'center' }}>Kerala</Title>
                <Meta title="Please login to continue" style={{ textAlign: 'center' }} />
                <Divider />
                <Form onFinish={handleOnFinish}
                    name="wrap"
                    labelCol={{
                        flex: '110px',
                    }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{
                        flex: 1,
                    }}
                    colon={false}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item
                        label="UserName :"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter username'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password :"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter Password'
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }}>


                        {captcha}
                        {/* <ClientCaptcha captchaCode={(e) => setCaptcha(e)} /> */}
                        
                    </div>

                    <Form.Item
                        label="Captcha :"
                        name="captcha"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter Captcha'
                            }, (e) => ({
                                validator(_, value) {
                                    if (value !== captcha) {
                                        return Promise.reject();
                                    }
                                    return Promise.resolve();
                                }
                            })
                        ]}
                    >
                        <Input type='number'/>
                    </Form.Item>
                    <Form.Item label="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Space>

                            <Button type="" htmlType="reset">
                                Clear
                            </Button>
                            <Button type="primary" htmlType='submit' loading={false}>
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                    <Form.Item label="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    </Form.Item>

                </Form>
            </Card>
        </div>
    )
}

export default Login
