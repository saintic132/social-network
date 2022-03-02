import React from "react";

type DialogsMessageType = {
    id: number
    message: string
}

function DialogsMessage(props: DialogsMessageType) {
    return (
        <div>
            <div>
                {props.message}
            </div>
        </div>
        
    )
}

export default DialogsMessage;