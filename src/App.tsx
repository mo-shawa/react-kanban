import { useState } from "react"
import "./App.css"
import type { TaskProps } from "./components/Task"
import { Category } from "./components/Category"

function App() {
	const [todos, setTodos] = useState<TaskProps[]>([
		{ title: "finish assessment", content: "today" },
	])
	const [inProgress, setInProgress] = useState<TaskProps[]>([])
	const [done, setDone] = useState<TaskProps[]>([])

	return (
		<div className="App">
			<Category title="To do" tasks={todos} />
			<Category title="In Progress" tasks={inProgress} />
			<Category title="Done" tasks={done} />
		</div>
	)
}

export default App
