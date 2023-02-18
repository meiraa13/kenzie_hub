import styled from "styled-components";

export const StyledDashboard = styled.div`

    header {
        display: flex;
        justify-content: space-between;
        height: 80px;
        align-items: center;
    }

    .section {
        display: flex;
        align-items: center;
        height: 120px;
        background-color: var(--grey-4);
        border-top: 1px solid var(--grey-1);
        border-bottom: 1px solid var(--grey-1);
    }

    div{
        display: flex;
        justify-content: space-between;
    }

    ul {
        margin-top: 2rem;
    }

      button {

        border-style: none;
        border-radius: 5px;
        padding: 0.6rem 1rem;
        color: white;
        background-color: var(--grey-2);

    }

    ul {
        margin-top: 2rem;
        background-color: var(--grey-2);
        padding: 1rem;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        display: flex;
        justify-content: space-between;
        background-color: var(--grey-4);
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    li:hover {
        opacity: .6;
    }

    p {
        color: var(--grey-1);
    }

   
`