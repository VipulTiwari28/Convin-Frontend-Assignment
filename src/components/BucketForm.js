import React, { useState } from 'react';
import { Input, Button } from 'antd';

const BucketForm = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="Enter bucket name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button type="primary" htmlType="submit">
                Create Bucket
            </Button>
        </form>
    );
};

export default BucketForm;
