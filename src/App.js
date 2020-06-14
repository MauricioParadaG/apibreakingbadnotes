import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import NotesComponent from './components/Notes.component';

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`; 

const ButtonNotes = styled.button`
   background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
   background-size: 300px;
   font-family: Arial, Helvetica, sans-serif;
   color: #fff;
   margin-top: 3rem;
   padding: 1rem 3rem;
   font-size: 2rem;
   border: 2px solid black;   
   transition: background-size .5s ease;

   :hover{
        cursor: pointer;
        background-size: 700px;
    }
`; 


////////////////////////////////////////////



function App() {

  const [breakNote, setBreakNoteState] = useState({});

  const checkingApi = async () =>{
    const res =  await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const data = await res.json();

    setBreakNoteState(data[0]);
  };

  useEffect(() => {
    checkingApi()

  }, []);

  return (
    <DivContainer>
      <NotesComponent
        breakNoteState = {breakNote}
      />

      <ButtonNotes
        onClick={() => checkingApi()}
      >
        Break it bad
      </ButtonNotes>
    </DivContainer>
  );
}

export default App;
