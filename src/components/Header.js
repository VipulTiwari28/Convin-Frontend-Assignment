import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntdHeader } = Layout;

const Header = () => {
    return (
        <AntdHeader>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/history">History</Link>
                </Menu.Item>
            </Menu>
        </AntdHeader>
    );
};

export default Header;
