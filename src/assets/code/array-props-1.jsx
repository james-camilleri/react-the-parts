function App({ tasks = [] }) {
  return (
    <div>
      {tasks.map((task) => (
        <Todo name={task.name} completed={task.completed} key={task.id} />
      ))}
    </div>
  )
}
