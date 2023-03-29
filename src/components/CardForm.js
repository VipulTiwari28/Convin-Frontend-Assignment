import React, { useState } from 'react';
import { Input, Select, Button } from 'antd';

const { Option } = Select;

const CardForm = ({ onSubmit, buckets }) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [bucketId, setBucketId] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, url, bucketId });
        setName('');
        setUrl('');
        setBucketId('');
    };

    return (<form onSubmit={handleSubmit} />)
}
