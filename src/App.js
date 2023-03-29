import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header.js';
import Home from './components/Card';
import History from './components/History';

const { Content } = Layout;

const App = () => {
    return(
        <Router>
            <Layout className="layout">
                <Header />
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-content">
                        <Routes>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/history">
                                <History />
                            </Route>
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Router>
    )
}

export default App;
