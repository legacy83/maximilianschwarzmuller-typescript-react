import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
	const todoItems = [{ id: 't1', text: 'finish the course' }];

	return (
		<div className="App">
			<NewTodo />
			<TodoList items={todoItems} />
		</div>
	);
};

export default App;
