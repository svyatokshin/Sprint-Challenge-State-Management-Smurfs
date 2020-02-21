import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { fetchSmurfs } from '../actions';
import { Smurf } from './Smurf';

const Smurfs = props => {
    console.log('Smurfs.js Props ', props);
    return (
        <div>
            {props.village.map(item => (
                <Smurf item={item} />
            ))}
            <Button variant='contained' color='primary' onClick={props.fetchSmurfs}>
                Fetch The Village Smurfs!
            </Button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        village: state.village
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);