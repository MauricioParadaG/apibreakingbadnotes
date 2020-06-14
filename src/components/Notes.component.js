import React from 'react';
import styled from '@emotion/styled';

const NoteContainer = styled.div`
    padding: 1rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media (min-width: 992px){
        margin-top: 7rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;

        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: right;
        color: #777;
        margin-top: 2rem;
    }
`; 


/////////////////////////////////////////
/////////////////////////////////////////


const NotesComponent = props => {

    if(Object.keys(props.breakNoteState).length === 0) return null;

    return (
        <NoteContainer>
        <h1>{props.breakNoteState.quote}</h1>
        <p>{props.breakNoteState.author}</p>
        </NoteContainer>
    )
}

export default NotesComponent;
;