import React from 'react';
import styled from 'styled-components';

const RefreshLocation = styled.button(() => ({
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#a0dd9d',
    fontSize: '0.9rem',
    fontWeight: 700,
    border: 'none',
    '&:hover:not(:disabled)': {
        backgroundColor: '#69c265',
    },
    '&:disabled': {
        cursor: 'unset',
    }
}));


interface RefreshLocaionProps {
    onClick: () => void;
    isAbleToClick: boolean;
}

const RefreshLocaion = (props: RefreshLocaionProps) => {
    const { onClick, isAbleToClick } = props;

    return (
        <RefreshLocation onClick={onClick} disabled={!isAbleToClick}>
            {isAbleToClick ? 'Refresh Location': 'Loading...'}
        </RefreshLocation>
    )
}

export default RefreshLocaion;
