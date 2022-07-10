/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import styled from "https://esm.sh/styled-components";

type Message = {
    text: string
}

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([])

    const getMessages = async () => {
        const res = await fetch('https://dfjhd-deno-chat.deno.dev/messages')
        const m = await res.json()
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
        <MessageList>
            {jsx}
        </MessageList>
    );
}

const MessageList = styled.div`
    background-color: yellow;
`