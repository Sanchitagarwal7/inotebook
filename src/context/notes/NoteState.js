import {useState} from 'react';
import NoteContext from './NoteContext';

const NoteState = (props)=>{
    const s1 = {
        "name" : "Sanchit",
        "class" : "10A"
    }

    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name": "Sachin",
                "class": "12A"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;