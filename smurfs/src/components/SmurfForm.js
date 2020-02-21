import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const FormDiv = styled.div`
    margin: 20px auto;
`
const Input = styled.input`
    border: 2px solid #88CCFF;
    border-radius: 7px;
`

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    });

    const handleName = e => {
        setSmurf({...smurf, name: e.target.value });
    };

    const handleAge = e => {
        setSmurf({...smurf, age: e.target.value});
    }

    const handleHeight = e => {
        setSmurf({...smurf, height: e.target.value});
    }

    const addNewSmurf = e => {
        e.preventDefault();
        console.log('this is addNewSmurf hook ', smurf);
        props.addSmurf(smurf);
    };
    return (
        <FormDiv>
            <form>
                <h3>Add a new Smurf to the Village!</h3>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={smurf.name}
                    onChange={handleName}
                />
                <br/>
                <br/>
                <Input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={smurf.age}
                    onChange={handleAge}
                />
                <br/>
                <br/>
                <Input
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={smurf.height}
                    onChange={handleHeight}
                />
                <br/>
                <br/>
                <Button variant='contained' color='secondary' onClick={addNewSmurf}>
                    Add New Villiage Smurf!
                </Button>
            </form>
        </FormDiv>
    );
};

const MapStateToProps = state => {
    return{
        name: state.village.name,
        age: state.village.age,
        height: state.village.height,
        village: state.village
    };
};

export default connect(MapStateToProps, { addSmurf })(SmurfForm);