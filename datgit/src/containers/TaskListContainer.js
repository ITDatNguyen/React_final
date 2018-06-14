import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskFlatList from '../components/TaskFlatList';
import deleteTask,{ finishTask }  from '../actions/TaskListViewActions';

class TaskListContainer extends Component {
    render() {
        const { data } = this.props.listData;
        const { onDeleteItem, onFinishedItem }= this.props;
        return (
            <TaskFlatList dataList={data} {...this.props} />    
        );
    }
}

const mapStateToProps = state => {
        return {
            listData : state.tasksList
        }
}

const mapDispatchToProps = dispatch => {
    return {
        onFinishedItem: (index) => dispatch(
            finishTask(index)),
        onDeleteItem : (index) => dispatch( deleteTask(index) )
    }
}

// export default connect(
//     state => {
//         return {
//             listData : state.tasksList
//         }
//     },
//     dispatch => {
//         return {
//             onFinishedItem: (index) => dispatch( finishTask(index) ),
//             onDeleteItem : (index) => dispatch( deleteTask(index) )
//         }
//     }
// )
// (TaskListContainer);

export default connect(mapStateToProps,mapDispatchToProps)(TaskListContainer);