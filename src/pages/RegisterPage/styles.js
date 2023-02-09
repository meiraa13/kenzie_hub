import styled from "styled-components";

export const StyledRegister = styled.div`

    header{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }  

    h2 {
        color:  var(--color-primary);
    }

    p {
        color: var(--grey-1);
    }

    .go-back {
        border-style: none;
        border-radius: 5px;
        padding: 0.6rem 1rem;
        color: white;
        background-color: var(--grey-3);
    }

    button {

        background-color: var(--color-primary);
        padding: 0.8rem;
        border-radius: 5px;
        border-style: none;
        color: white;

    }

    form {
        background-color: var(--grey-3);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
        border-radius: 5px;
        padding: 1rem;
    }

    label {
        text-align:start;
    }

    input, select {
        padding: 0.8rem;
        border-radius: 5px;
        border-style: none;
        background-color: var(--grey-2);
        color: white;
    }



`