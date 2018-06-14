import React, { Component } from 'react';

export default class AddViews extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newTaskName:''
        }
    }
    
    onChange = (event)=> {
        this.setState({newTaskName: event.target.value});
    }

    render() {
        console.log("trang add");
        const {onAddNewTask} = this.props;
        const style = {
            marginBottom : '7px'
        };

        return (
            <div>
                <form style= {style} onSubmit = { () => onAddNewTask(this.state.newTaskName) } >
                    <legend>Add Note</legend>
                    <div className="form-group">
                    <input onChange={this.onChange.bind(this)} className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}
