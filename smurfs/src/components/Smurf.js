import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 300px;
    height: 200px;
    background: #88CCFF;
    margin: 10px auto;

`

export const Smurf = props => {
    console.log('Single Smurf props ', props);
    return (
        <Card>
            <h1>{props.item.name}</h1>
            <h3>Age: {props.item.age}</h3>
            <h3>Height: {props.item.height}</h3>
        </Card>
    )
}