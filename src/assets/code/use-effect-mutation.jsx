import { useEffect } from 'react'
import { createConnection } from './chat.js'

function ChatRoom({ room }) {
  const [serverData, setServerData] = useState({ url: 'https://localhost:1234' })

  useEffect(() => {
    const connection = createConnection(serverData.url, room.id)
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [serverData, room])

  // This will never trigger a new connection.
  const onClick = () => {
    serverData.url = 'https://backup-server.com'
  }
}

function App() {
  const [room, setRoom] = useState({ id: 0 })

  // Neither will this.
  const updateRoom = () => {
    room.id += 1
  }

  return <ChatRoom room={room} />
}
