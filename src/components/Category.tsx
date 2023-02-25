import { ComponentProps } from "react"
import { Task } from "./Task"

type CategoryProps = {
	title: string
	tasks: any[]
}

export function Category({ tasks, title }: CategoryProps) {
	const categoryTasks =
		tasks.length &&
		tasks.map((task, index) => (
			<Task key={index} title={task.title} content={task.content} />
		))

	return (
		<div
			onDrop={(e) => console.log(e)}
			onDragOver={(e) => e.preventDefault()}
			className="category"
		>
			<h1>{title}</h1>
			<button className="add-task">+</button>
			<div className="category-content">
				{categoryTasks ? categoryTasks : <h3>No tasks in category</h3>}
			</div>
		</div>
	)
}
