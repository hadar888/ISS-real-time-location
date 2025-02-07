import React from 'react';
import RefreshLocaion from './RefreshLocaion';
import styled from 'styled-components';

const InfoContainer = styled.div(() => ({
    position: 'absolute',
    top: 10,
    right: 10,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 400,
    border: 'solid 2px #08e408',
    backgroundColor: '#ffffffa6',
    borderRadius: '5px',
    padding: '10px',
    width: '265px',
    gap: '5px',
}));

const Header = styled.div(() => ({
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'grey',
    padding: '8px 0',
    textAlign: 'center',
}));

const InfoText = styled.div(() => ({
    color: '#5858b6',
}));

interface LocationInfoProps {
    latitude: number | undefined;
    longitude: number | undefined;
    lastUpdateTime: number | undefined;
    onRefresh: () => void;
}

const LocationInfo = (props: LocationInfoProps) => {
    const { latitude, longitude, lastUpdateTime, onRefresh } = props;

    return (
        <InfoContainer>
            <Header> ISS </Header>
            <InfoText>
                <div> last update: {lastUpdateTime ? new Date(lastUpdateTime).toDateString() + " "
                    + new Date(lastUpdateTime).toLocaleTimeString() : 'Loading...'} </div>
                <div> latitude: {latitude ? latitude : 'Loading...'} </div>
                <div> longitude: {longitude ? longitude : 'Loading...'} </div>
            </InfoText>
            <RefreshLocaion onClick={onRefresh} />
        </InfoContainer>
    )
};

export default LocationInfo;
