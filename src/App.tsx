import { DragEvent, DragEventHandler, useState } from "react"
import "./App.css"
import { Category } from "./components/Category"

export default function App() {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: crypto.randomUUID(),
			title: "finish assessment 1",
			content: "today",
			category: "To Do",
		},
		{
			id: crypto.randomUUID(),
			title: "finish assessment 2",
			content: "today",
			category: "To Do",
		},
		{
			id: crypto.randomUUID(),
			title: "finish assessment 3",
			content: "today",
			category: "To Do",
		},
		{
			id: crypto.randomUUID(),
			title: "finish assessment 4",
			content: "today",
			category: "To Do",
		},
		{
			id: crypto.randomUUID(),
			title: "finish assessment 5",
			content: "today",
			category: "To Do",
		},
		{
			id: crypto.randomUUID(),
			title: "finish assessment 6",
			content: "today",
			category: "To Do",
		},
	])

	function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
		console.log(e)
		e.dataTransfer.setData("id", e.currentTarget.id)
	}

	function handleDrop(e: React.DragEvent<HTMLDivElement>) {
		console.log(e)
		const id = e.dataTransfer.getData("id")
		const foundTaskId = tasks.findIndex((task) => task.id === id)
		const tasksCopy = [...tasks]

		const toCategory = e.currentTarget.id

		tasksCopy[foundTaskId].category = toCategory as TaskCategory
		setTasks(() => tasksCopy)
	}

	const todos = tasks.filter((task) => task.category === "To Do")
	const inProgress = tasks.filter((task) => task.category === "In Progress")
	const done = tasks.filter((task) => task.category === "Done")

	return (
		<div className="App">
			<div id="category-container">
				<Category
					handleDragStart={handleDragStart}
					handleDrop={handleDrop}
					title="To Do"
					tasks={todos}
				/>
				<Category
					handleDragStart={handleDragStart}
					handleDrop={handleDrop}
					title="In Progress"
					tasks={inProgress}
				/>
				<Category
					handleDragStart={handleDragStart}
					handleDrop={handleDrop}
					title="Done"
					tasks={done}
				/>
			</div>
		</div>
	)
}

type TaskCategory = "To Do" | "In Progress" | "Done"

export type Task = {
	id: ReturnType<typeof crypto.randomUUID>
	title: string
	content: string
	category: TaskCategory
}
