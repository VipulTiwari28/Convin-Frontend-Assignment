const API_URL = 'http://localhost:3001';

export const fetchCards = async () => {
    const response = await fetch(`${API_URL}/cards`);
    const data = await response.json();
    return data;
};

export const createCard = async (card) => {
    const response = await fetch(`${API_URL}/cards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(card),
    });
    const data = await response.json();
    return data;
};

export const updateCard = async (card) => {
    const response = await fetch(`${API_URL}/cards/${card.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(card),
    });
    const data = await response.json();
    return data;
};

export const deleteCard = async (cardId) => {
    const response = await fetch(`${API_URL}/cards/${cardId}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
};

export const fetchBuckets = async () => {
    const response = await fetch(`${API_URL}/buckets`);
    const data = await response.json();
    return data;
};

export const createBucket = async (bucket) => {
    const response = await fetch(`${API_URL}/buckets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bucket),
    });
    const data = await response.json();
    return data;
};

export const updateBucket = async (bucket) => {
    const response = await fetch(`${API_URL}/buckets/${bucket.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bucket),
    });
    const data = await response.json();
    return data;
};

export const deleteBucket = async (bucketId) => {
    const response = await fetch(`${API_URL}/buckets/${bucketId}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
};

export const fetchHistory = async () => {
    const response = await fetch(`${API_URL}/history`);
    const data = await response.json();
    return data;
};

export const createHistoryItem = async (historyItem) => {
    const response = await fetch(`${API_URL}/history`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(historyItem),
    });
    const data = await response.json();
    return data;
};
