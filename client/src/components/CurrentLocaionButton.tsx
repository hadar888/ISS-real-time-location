import React from 'react';

interface CurrentLocaionButtonProps {
    onClick: () => void;
}

const CurrentLocaionButton = (props: CurrentLocaionButtonProps) => {
    const { onClick } = props;

    return (
        <button onClick={onClick}>
            Get current location
        </button>
    )
}

export default CurrentLocaionButton;
