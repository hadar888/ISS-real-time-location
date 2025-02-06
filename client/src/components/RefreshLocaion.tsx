import React from 'react';

interface RefreshLocaionProps {
    onClick: () => void;
}

const RefreshLocaion = (props: RefreshLocaionProps) => {
    const { onClick } = props;

    return (
        <button onClick={onClick}>
            Refresh Location
        </button>
    )
}

export default RefreshLocaion;
