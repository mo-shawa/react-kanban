import { DragEventHandler } from "react"
import type { Task } from "../App"

type TaskProps = Task & {
	handleDragStart: DragEventHandler<HTMLDivElement>
}

export function Task({ id, title, content, handleDragStart }: TaskProps) {
	return (
		<div
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
