import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Card Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
    },
    {
        title: 'Time Played',
        dataIndex: 'timePlayed',
        key: 'timePlayed',
    },
];

const History = ({ history }) => {
    return (
        <div className="history">
            <h2>History</h2>
            <Table dataSource={history} columns={columns} />
        </div>
    );
};

export default History;
