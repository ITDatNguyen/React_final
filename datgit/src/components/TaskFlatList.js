import React, { Component } from 'react';

export default class TaskFlatList extends Component {
    
    render() {
        const style = {
            marginTop : '5px'
        };
        console.log("trang task list");        
        let { onDeleteItem, onFinishedItem } = this.props;
        let elements = this.props.dataList.map((dulieu,index) =>
            (
                <tbody key= {index} >
                <tr>
                <td>{index+1}</td>
                <td>{dulieu.title}</td>
                <td onClick = {()=>onFinishedItem(index)} >{dulieu.isPending === true ? '✅' : '🕘'} </td>
                <button style={style} className="btn btn-danger" onClick = {()=>onDeleteItem(index)} >Delete</button>
                </tr>
                </tbody>
            )
        );
        return (
            <div>
                <table className="table table-condensed table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                         { elements }
                </table>
            </div>
        );
    }
}