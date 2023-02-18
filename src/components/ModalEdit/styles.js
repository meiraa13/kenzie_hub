import styled from "styled-components";

export const StyledEditModal = styled.div`


        
        .modal-background {
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;

        }

        .modal-container {
            width: 350px;
            height: 300px;
            background-color: var(--grey-4);
            border-style: none;
            color: white;
            display: flex;
            flex-direction: column;
            border-radius: 0 0 5px 5px;
        }
    
   

        .modal-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 20%;
            background-color: var(--grey-2);
            padding: 1rem;
            border-radius: 5px 5px 0 0 ;
        }

        form {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            height: 80%;
            justify-content: space-between;
            border: 100px;
        }

        input, select {

        padding: 0.7rem;
        background-color: var(--grey-2);
        color: var(--grey-1);
        border-style: none;
        border-radius: 5px;
        }

        input ::placeholder {
        color: var(--grey-1);
        }

        .btn-edit {
            padding: 1rem 3rem;
            background-color: var( --color-primary-negative);
        }

        .btn-exclude {
            padding: 1rem 1.5rem;
            background-color: var(--grey-1);

        }
`