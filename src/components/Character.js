// Write your Character component here
import React from 'react';
import styled from 'styled-components';

function Character(props) {
  const characterInfo = props.props;
  console.log(characterInfo);
  const newList = characterInfo.map(id => {
    return (
      <MainDiv>
        <h1>Name: {id.name}</h1>
        <h2>Character Info:</h2>
        <p>Gender: {id.gender}</p>
        <p>Year Born: {id.birth_year}</p>
        <p>Hair Color: {id.hair_color}</p>
        <p>Eye Color: {id.eye_color}</p>
        <p>Height: {id.height}cm</p>
      </MainDiv>
    )
  });
return newList
}

export default Character

const MainDiv = styled.div`
  height: 100%;
  background-color: #f4ece2;
  color: #21421e;
  margin: 1% 40%;
  padding: 10px;
  border-radius: 16px;
`;