import React, { useState } from 'react';
import { Modal as AntdModal, Button } from 'antd';

const Modal = ({ title, content, onOk, onCancel, okText = 'Ok', cancelText = 'Cancel' }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
        onOk();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        onCancel();
    };

    const handleButtonClick = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <Button onClick={handleButtonClick}>{title}</Button>
            <AntdModal
                title={title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={okText}
                cancelText={cancelText}
            >
                {content}
            </AntdModal>
        </>
    );
};

export default Modal;
