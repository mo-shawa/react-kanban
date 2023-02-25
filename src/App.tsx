import { DragEvent, DragEventHandler, useState } from "react"
import "./App.css"
import { Category } from "./components/Category"

export default function App() {
	const [tasks, setTasks] = useState<Task[]>([
		{ title: "finish assessment 1", content: "today", category: "to do" },
		{ title: "finish assessment 2", content: "today", category: "to do" },
		{ title: "finish assessment 3", content: "today", category: "to do" },
		{ title: "finish assessment 4", content: "today", category: "to do" },
		{ title: "finish assessment 5", content: "today", category: "to do" },
		{ title: "finish assessment 6", content: "today", category: "to do" },
	])

	function handleDragStart(e: DragEvent) {
		console.log(e)
		e.dataTransfer?.setData
	}

	const todos = tasks.filter((task) => task.category === "to do")
	const inProgress = tasks.filter((task) => task.category === "in progress")
	const done = tasks.filter((task) => task.category === "done")

	return (
		<div className="App">
			<div id="category-container">
				<Category
					handleDragStart={handleDragStart}
					title="To do"
					tasks={todos}
				/>
				<Category
					handleDragStart={handleDragStart}
					title="In Progress"
					tasks={inProgress}
				/>
				<Category handleDragStart={handleDragStart} title="Done" tasks={done} />
			</div>
		</div>
	)
}

type TaskCategory = "to do" | "in progress" | "done"

export type Task = {
	title: string
	content: string
	category: TaskCategory
}
