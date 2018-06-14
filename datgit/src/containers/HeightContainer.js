import React, { Component } from 'react';
import { connect } from 'react-redux';
import addNumber, { subNumber } from '../actions/CounterViewActions';
import Height from '../components/Height';

class HeightContainer extends Component {
    render() {
        const { addNumber, subNumber } = this.props;
        const { number } = this.props.number;
        return (
            <div>
                <Height val={ number } {...this.props} />
            </div>
        );
    }
}

export default connect( state=>{
    return {
        number : state.number
    }
    },
    dispacth =>{
        return{
            addNumber: () => dispacth( addNumber() ),
            subNumber: () => dispacth( subNumber() )
        }
    }
)
(HeightContainer);