import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './model/todo';

const App: React.FC = () => {
	const [todoItems, setTodoItems] = useState<Todo[]>([]);

	const addHandler = (value: string) => {
		setTodoItems((previous) => [
			...previous,
			{ id: Math.random().toString(), text: value },
		]);
	};

	const deleteHandler = (id: string) => {
		setTodoItems((previous) => {
			return previous.filter((todoItem) => id !== todoItem.id);
		});
	};

	return (
		<div className="App">
			<NewTodo onAdd={addHandler} />
			<TodoList items={todoItems} onDelete={deleteHandler} />
		</div>
	);
};

export default App;
