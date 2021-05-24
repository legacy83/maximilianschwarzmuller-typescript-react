import React, { useRef } from 'react';

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const entryText = inputRef.current!.value;
		props.onAdd(entryText);
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="todo-text">Todo Text</label>
				<input type="text" id="todo-text" ref={inputRef} />
			</div>
			<button type="submit">Add Todo</button>
		</form>
	);
};

interface NewTodoProps {
	onAdd: (value: string) => void;
}

export default NewTodo;
