import { ComponentProps } from "react"
import { Task } from "./Task"

type CategoryProps = {
	title: string
	tasks: any[]
}

export function Category({ tasks, title }: CategoryProps) {
	const categories = tasks.map((task) => (
		<Task title={task.title} content={task.content} />
	))
	return (
		<div>
			<h1>{title}</h1>
			{categories}
		</div>
	)
}
