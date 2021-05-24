import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
	const todoItems = [{ id: 't1', text: 'finish the course' }];

	const addHandler = (value: string) => {
		console.log(value);
	};

	return (
		<div className="App">
			<NewTodo onAdd={addHandler} />
			<TodoList items={todoItems} />
		</div>
	);
};

export default App;
