import React from 'react';

const TodoList: React.FC<TodoListProps> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
};

interface TodoListProps {
	items: {
		id: string;
		text: string;
	}[];
}

export default TodoList;
