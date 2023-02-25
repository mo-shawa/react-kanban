import { useState } from "react"
import "./App.css"
import type { TaskProps } from "./components/Task"
import { Category } from "./components/Category"

function App() {
	const [todos, setTodos] = useState<TaskProps[]>([
		{ title: "finish assessment", content: "today" },
		{ title: "finish assessment", content: "today" },
		{ title: "finish assessment", content: "today" },
	])
	const [inProgress, setInProgress] = useState<TaskProps[]>([
		{ title: "finish assessment", content: "today" },
		{ title: "finish assessment", content: "today" },
	])
	const [done, setDone] = useState<TaskProps[]>([
		{ title: "finish assessment", content: "today" },
		{ title: "finish assessment", content: "today" },
	])

	return (
		<div className="App">
			<div id="category-container">
				<Category title="To do" tasks={todos} />
				<Category title="In Progress" tasks={inProgress} />
				<Category title="Done" tasks={done} />
			</div>
		</div>
	)
}

export default App
