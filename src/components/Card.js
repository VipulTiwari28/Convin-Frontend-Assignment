import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Card = ({ card, onDeleteCard, onMoveCard }) => {
    const { name, url } = card;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDeleteClick = () => {
        onDeleteCard(card);
    };

    const handleMoveClick = () => {
        onMoveCard(card);
    };

    const handleCardClick = () => {
        setIsModalVisible(true);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="card">
            <h3>{name}</h3>
            <Button type="danger" onClick={handleDeleteClick}>
                Delete
            </Button>
            <Button onClick={handleMoveClick}>Move</Button>
            <div onClick={handleCardClick}>
                <img src={`https://img.youtube.com/vi/${url}/0.jpg`} alt={name} />
            </div>
            <Modal
                title={name}
                visible={isModalVisible}
                onCancel={handleModalCancel}
                footer={null}
            >
                <iframe src={`https://www.youtube.com/embed/${url}`} width="100%" height="400px" />
            </Modal>
        </div>
    );
};

export default Card;
