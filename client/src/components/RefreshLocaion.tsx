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
    '&:hover': {
        backgroundColor: '#69c265',
    }
}));


interface RefreshLocaionProps {
    onClick: () => void;
}

const RefreshLocaion = (props: RefreshLocaionProps) => {
    const { onClick } = props;

    return (
        <RefreshLocation onClick={onClick}>
            Refresh Location
        </RefreshLocation>
    )
}

export default RefreshLocaion;
