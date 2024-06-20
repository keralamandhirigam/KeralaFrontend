import React from 'react';
import { Avatar, Flex, Layout, Menu, Typography, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './home.module.scss';
import { Link, Outlet } from 'react-router-dom';
const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const Items = [
    {
        key: 1,
        name: 'Datas',
        link: 'data'
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

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
 
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {Items.map(item => (
                        <Menu.Item key={item.key} onClick={()=>console.log(item.name)}>
                            <Link to={`/home/${item.link}`}>
                            {item.name}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>

            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >

                    <Flex vertical align="flex-end" justify="space-between" className={styles.Avatar}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Flex>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            // minHeight: `80vh`,
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
    );
};
export default Home;