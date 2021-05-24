import React from 'react';
import './TodoList.css';

const TodoList: React.FC<TodoListProps> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item.id}>
					<span>{item.text}</span>
					<button onClick={props.onDelete.bind(null, item.id)}>delete</button>
				</li>
			))}
		</ul>
	);
};

interface TodoListProps {
	items: {
		id: string;
		text: string;
	}[];
	onDelete: (id: string) => void;
}

export default TodoList;
