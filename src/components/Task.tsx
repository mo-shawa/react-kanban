import { DragEventHandler } from "react"
import type { Task } from "../App"

type TaskProps = Task & {
	handleDragStart: DragEventHandler<HTMLDivElement>
}

export function Task({ title, content, handleDragStart }: TaskProps) {
	return (
		<div className="task" draggable="true" onDragStart={handleDragStart}>
			<details>
				<summary>
					<h4 style={{ display: "inline" }}>{title}</h4>
				</summary>
				{content}
			</details>
		</div>
	)
}
