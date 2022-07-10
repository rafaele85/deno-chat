/** @jsx h */
import { h, JSX } from "preact";
import { useState, useEffect } from "preact/hooks";

type Message = {
    text: string
}

const MessageList = () => {

    const [messages, setMessages] = useState<Message[]>([])

    const getMessages = async () => {
        console.log('---starting fetch')
        const res = await fetch('https://dfdf-api-deno-chat.deno.dev/messages')
        const m = await res.json()
        setMessages(m)
    }

    const handleRefresh = async () => {
        await getMessages()
    }

    useEffect(() => {
        void getMessages()
    }, [])
    const jsx: JSX.Element[] = []
    for (let message of messages) {
        jsx.push((
            <div>{message.text}</div>
        ))
    }


    return (
        <div>
            Messages
            {jsx}
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    )
}

export default MessageList