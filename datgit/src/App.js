import React, { Component } from 'react';
import TaskListContainer from './containers/TaskListContainer.js';
import AddViewContainer from './containers/AddViewContainer.js';
import HeightContainer from './containers/HeightContainer';
import Menu from './components/Menu';
import taskListReducer from './reducers/TaskListReducers';
import NumberReducer from './reducers/NumberReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const store = createStore( 
  combineReducers({ 
    number : NumberReducer,
    tasksList : taskListReducer
  })
);
class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store= {store}>          
          <div>
            <Menu/>
            <HeightContainer/>
            <AddViewContainer/>
            <TaskListContainer />
          </div>
        </Provider>
      </div>
    )
  }
}

export default App;
