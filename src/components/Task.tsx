import { DragEventHandler } from "react"
import type { TaskType } from "../App"

type TaskProps = TaskType & {
	handleDragStart: DragEventHandler<HTMLDivElement>
}

export function Task({
	id,
	title,
	content,
	category,
	handleDragStart,
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
		</div>
	)
}
