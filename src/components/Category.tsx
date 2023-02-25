import { ComponentProps, DragEventHandler, useState } from "react"
import { Task } from "./Task"
import type { TaskType, TaskCategory } from "../App"

type CategoryProps = {
	title: string
	tasks: any[]
	handleDeleteTask: Function
	handleDragStart: React.DragEventHandler<HTMLDivElement>
	handleDrop: React.DragEventHandler<HTMLDivElement>
}

export function Category({
	tasks,
	title,
	handleDragStart,
	handleDrop,
	handleDeleteTask,
}: CategoryProps) {
	const categoryTasks =
		tasks.length &&
		tasks.map((task) => (
			<Task
				id={task.id}
				handleDragStart={handleDragStart}
				key={task.id}
				title={task.title}
				content={task.content}
				category={task.category}
				handleDeleteTask={handleDeleteTask}
			/>
		))

	return (
		<div
			id={title}
			onDrop={handleDrop}
			onDragOver={(e) => e.preventDefault()}
			className="category"
		>
			<h1>{title}</h1>
			<hr />

			<div className="category-content">
				{categoryTasks ? categoryTasks : <h3>No tasks in category</h3>}
			</div>
		</div>
	)
}
