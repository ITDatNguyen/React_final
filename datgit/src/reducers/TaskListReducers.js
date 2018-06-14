let appState = {
      data : [
        { title: 'Get Up', isPending: true},
        { title: 'Breakfast with family', isPending: true},
        { title: 'Go to school ', isPending: false},
        { title: 'PHP script', isPending: false}
      ]
}

const taskListReducer = (state = appState , action) => {
    let newTaskList  = state.data;
    switch(action.type) {
      case 'ADD':
        const newTask = { title: action.taskName, isFinished: false }
        return { ...state, data: [...newTaskList, newTask] }
      case 'FINISH':
        newTaskList[action.atIndex].isPending =! newTaskList[action.atIndex].isPending;
        return { ...state, data: newTaskList };
      case 'DELETE':
        newTaskList = newTaskList.filter( (item, i) => i !== action.atIndex );
        return {...state , data: newTaskList };
    }
    return state;
}

export default taskListReducer;
