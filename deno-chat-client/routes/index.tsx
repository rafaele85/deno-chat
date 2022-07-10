/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

type Message = {
    text: string
}

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([])

    const getMessages = async () => {
        const res = await fetch('https://dfjhd-deno-chat.deno.dev/messages')
        const m = await res.json()
        console.log('---', m)
        setMessages(m)
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
            {jsx}
        </div>
    );
}

