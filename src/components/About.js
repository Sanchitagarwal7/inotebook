import React, { useEffect } from 'react';
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext'

function About(){
    const a = useContext(NoteContext);
    useEffect(()=>{
        a.update();
        // eslint-disable-next-line
    }, []);

    return(
    <>
        This is About {a.state.name} and he is in class {a.state.class}.
    </>
    );
}

export default About;