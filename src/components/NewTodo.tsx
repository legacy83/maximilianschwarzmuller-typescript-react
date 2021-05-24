import React, { useRef } from 'react';

const NewTodo: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const entryText = inputRef.current!.value;
		console.log(entryText);
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

export default NewTodo;
