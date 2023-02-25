import { DragEventHandler } from "react"
import type { TaskType } from "../App"

type TaskProps = TaskType & {
	handleDragStart: DragEventHandler<HTMLDivElement>
	handleDeleteTask: Function
}

export function Task({
	id,
	title,
	content,
	category,
	handleDragStart,
	handleDeleteTask,
}: TaskProps) {
	const borderStyles = {
		"To Do": "white",
		"In Progress": "yellow",
		Done: "lime",
	}

	return (
		<div
			style={{
				borderColor: borderStyles[category],
				backgroundColor: category === "Done" ? "lightseagreen" : "",
			}}
			className="task"
			draggable="true"
			id={id}
			onDragStart={(e) => handleDragStart(e)}
		>
			<details>
				<summary>
					<h4 style={{ display: "inline" }}>{title}</h4>
				</summary>
				{content}
			</details>
			<button onClick={() => handleDeleteTask(id)} className="delete">
				X
			</button>
		</div>
	)
}
