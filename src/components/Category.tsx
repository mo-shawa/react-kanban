import { ComponentProps, DragEventHandler } from "react"
import { Task } from "./Task"

type CategoryProps = {
	title: string
	tasks: any[]
	handleDragStart: DragEventHandler<HTMLDivElement>
}

export function Category({ tasks, title, handleDragStart }: CategoryProps) {
	const categoryTasks =
		tasks.length &&
		tasks.map((task) => (
			<Task
				handleDragStart={handleDragStart}
				key={crypto.randomUUID()}
				title={task.title}
				content={task.content}
			/>
		))

	return (
		<div
			onDrop={(e) => console.log(e)}
			onDragOver={(e) => e.preventDefault()}
			className="category"
		>
			<h1>{title}</h1>
			<hr />
			<button className="add-task">+</button>
			<div className="category-content">
				{categoryTasks ? categoryTasks : <h3>No tasks in category</h3>}
			</div>
		</div>
	)
}
