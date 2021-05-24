import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './model/todo';

const App: React.FC = () => {
	const [todoItems, setTodoItems] = useState<Todo[]>([]);

	const addHandler = (value: string) => {
		setTodoItems([{ id: Math.random().toString(), text: value }]);
	};

	return (
		<div className="App">
			<NewTodo onAdd={addHandler} />
			<TodoList items={todoItems} />
		</div>
	);
};

export default App;
