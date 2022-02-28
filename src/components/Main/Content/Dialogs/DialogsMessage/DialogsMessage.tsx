import React from "react";

type DialogsMessageType = {
    message: string
}

function DialogsMessage(props: DialogsMessageType) {
    return (
                <div>
                    {props.message}
                </div>
    )
}

export default DialogsMessage