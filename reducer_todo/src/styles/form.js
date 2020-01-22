import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  padding: 0.5rem;

  label {
    color: #efefef;
  }

  input {
    border: none;
    background-color: #9c9c9c;
    color: #1c1c1c;
    padding: 0.25rem;
    font-family: "Roboto", sans-serif;
  }

  button {
    border: none;
    background-color: #3c3c3c;
    padding: 0.5rem;
    color: #fff;
    transition: 0.2s ease-out all;

    :hover {
      cursor: pointer;
      background-color: #2c2c2c;
      color: #eee;
    }
  }

  * {
    margin: 0.25rem;
  }

  @media (max-width: 870px) {
    flex-direction: column;

    input {
      width: 67%;
    }
  }
`;
