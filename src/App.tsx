import React, {useState} from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

type DialogsNameType = {
    id: number
    name: string
}
type DialogsMessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogsName: DialogsNameType[]
    dialogsMessage: DialogsMessageType[]
}
export type RootStateType = {
    dialogPage: DialogsPageType
}


function App() {


    let [state, setState] = useState<RootStateType>({
        dialogPage: {
            dialogsName: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Pasha'},
                {id: 3, name: 'Vitya'},
                {id: 4, name: 'Dima'},
            ],
            dialogsMessage: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How'},
                {id: 3, message: 'Are'},
                {id: 4, message: 'You'},
                {id: 5, message: 'Today'},
                {id: 6, message: '?'},
            ],
        }
    });


    const addNewMessage = (message: string) => {
        let newMessage = {
            id: 7,
            message: message
        }
        state.dialogPage.dialogsMessage.push(newMessage)
        setState({...state})
    }

    return (


        <div className={s.app}>
            <Header />
            <Main
                state={state}
                addNewMessage={addNewMessage}
            />
            <Footer />
        </div>
    );
}

export default App;
