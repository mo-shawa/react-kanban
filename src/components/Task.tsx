export type TaskProps = {
	title: string
	content: string
}

export function Task({ title, content }: TaskProps) {
	return (
		<div className="task" draggable="true">
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	)
}
