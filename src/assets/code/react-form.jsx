function Form() {
  const [firstName, setFirstName] = useState('') // Declare a state variable...
  // ...
  return (
    <input
      value={firstName} // ...force the input's value to match the state variable...
      onChange={(e) => setFirstName(e.target.value)} // ... and update the state variable on any edits!
    />
  )
}
