const EMPTY_ARRAY = []

function App({ tasks = EMPTY_ARRAY }) {
  return (
    <div>
      {tasks.map((task) => (
        <Todo name={task.name} completed={task.completed} key={task.id} />
      ))}
    </div>
  )
}
