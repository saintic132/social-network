import React from "react";

type MessagesProps = {
    name: string
}

function Messages(props: MessagesProps) {
    return (
        <div>
            {props.name}
        </div>
    )
}

export default Messages