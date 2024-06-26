/* eslint-disable */
import React, { useEffect } from 'react';
import { Avatar, ConfigProvider, Flex, Grid, Layout, Menu, Typography, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './home.module.scss';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import CustomeTheme from '../theme'
const { useBreakpoint } = Grid;
const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const Items = [
    {
        key: 1,
        name: 'Datas',
        link: 'home'
    },
    {
        key: 2,
        name: 'Create Data',
        link: 'form'
    },
    {
        key: 3,
        name: 'About',
        link: 'about'
    },

]
const Home = () => {
    const navigate = useNavigate()
    const screens = useBreakpoint();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        navigate('/home')
    }, [])

    const handleLogout = () => {
        localStorage.clear('isUserLogged');
        navigate('/login')
    }



    return (
        <ConfigProvider theme={CustomeTheme}>
            <Layout style={{ minHeight: "100vh" }} >

                <Sider
                    style={{ zIndex: 1 }}
                    theme='light'
                    breakpoint="md"
                    collapsedWidth="0"
                // onBreakpoint={(broken) => {
                //     console.log('broken', broken);
                // }}
                // onCollapse={(collapsed, type) => {
                //     console.log(collapsed, type);
                // }}
                >
                    <div className="logo-vertical" >
                    </div>
                    <Menu theme='light' mode="inline" defaultSelectedKeys={['1']}>
                        {Items.map(item => (
                            <Menu.Item key={item.key}>
                                <Link to={`${item.link}`}>
                                    {item.name}
                                </Link>
                            </Menu.Item>
                        ))}

                        <Menu.Item key={4} onClick={handleLogout}>
                            LogOut
                        </Menu.Item>
                    </Menu>

                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >


                        <Flex justify='flex-start' align='flex-end' className={styles.logoContainer}>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

                            <Text className={styles.textContainer}>Kerala</Text>
                        </Flex>
                    </Header>
                    <Content
                        style={{
                            margin: screens?.xs === !true ? '24px 16px 0' : undefined,
                        }}
                    >
                        <div
                            style={{
                                padding: screens?.xs === true && 5 || screens?.sm === true && 12 || screens?.md === true && 18 || screens?.xl === true && 24,
                                // minHeight: `85vh`,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        ©{new Date().getFullYear()} Created by
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};
export default Home;