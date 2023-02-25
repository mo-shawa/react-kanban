import React, {
	ChangeEvent,
	DragEvent,
	DragEventHandler,
	useState,
} from "react"
import "./App.css"
import { Category } from "./components/Category"

export default function App() {
	const [tasks, setTasks] = useState<TaskType[]>([
		{
			id: crypto.randomUUID(),
			title: "Sample Task 1",
			content: "Sample Content",
			category: "To Do",
		},
		{
			id: crypto.randomUUID(),
			title: "Sample task 2",
			content: "Sample Content",
			category: "In Progress",
		},
	])

	const [showingTaskForm, setShowingTaskForm] = useState<Boolean>(false)
	const [newTask, setNewTask] = useState<TaskType>({
		id: crypto.randomUUID(),
		title: "",
		content: "",
		category: "To Do",
	})

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		setNewTask({ ...newTask, [e.target.name]: e.target.value })
	}

	function handleFormSubmit(e: React.FormEvent) {
		e.preventDefault()
		setTasks((prev) => [...prev, newTask])
		setNewTask({
			id: crypto.randomUUID(),
			title: "",
			content: "",
			category: "To Do",
		})
		setShowingTaskForm(false)
	}

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
			<button
				onClick={() => setShowingTaskForm(!showingTaskForm)}
				className="add-task"
			>
				{showingTaskForm ? "x" : "+"}
			</button>
			{showingTaskForm && (
				<div className="form-container">
					<form onSubmit={handleFormSubmit}>
						<input
							required={true}
							onChange={handleChange}
							type="text"
							name="title"
							placeholder="Title"
						/>
						<input
							onChange={handleChange}
							type="text"
							name="content"
							placeholder="Content"
						/>
						<button type="submit">Add</button>
					</form>
				</div>
			)}
		</div>
	)
}

export type TaskCategory = "To Do" | "In Progress" | "Done"

export type TaskType = {
	id: ReturnType<typeof crypto.randomUUID>
	title: string
	content: string
	category: TaskCategory
}
