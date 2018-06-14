import React, { Component } from 'react';

class Height extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        console.log("trang height");
        const style={
            paddingBottom:'20px'
        }
        const { val, addNumber, subNumber } = this.props;

        return (
            <div>
                <i style= {style} ><u>Height :</u></i><br/>
                <div className="input-group-prepend">
                    <button onClick={()=>subNumber()} className="btn btn-outline-secondary" >Sub</button>
                        <h4>Height: {val}cm</h4>
                    <button onClick={()=>addNumber()} className="btn btn-outline-secondary" >Add</button>
                </div>
            </div>
        );
    }
}

export default Height;