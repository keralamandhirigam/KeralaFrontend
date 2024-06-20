import React from 'react';
import { Avatar,  Flex, Layout, Menu, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './home.module.scss';
import toast from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
const { Header, Content, Footer, Sider } = Layout;
const items = [
    {
        key: 1,
        label: 'Home'
    },
    {
        key: 2,
        label: 'Create Data'
    },
    {
        key: 3,
        label: 'Home'
    },

]
const Home = () => {
    

   

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // ==========================================================================================================


    // ==========================================================================================================


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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
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