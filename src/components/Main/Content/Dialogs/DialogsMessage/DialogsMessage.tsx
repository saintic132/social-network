import React from "react";

type DialogsMessageType = {
    id: number
    message: string
}

function DialogsMessage(props: DialogsMessageType) {
    return (
                <div>
                    {props.message}
                </div>
    )
}

export default DialogsMessage;