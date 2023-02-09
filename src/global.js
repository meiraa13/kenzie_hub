import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;
    }

    button {
        cursor: pointer;
    }   

    body {

        background-color: var(--grey-4);
        color: white;

    }

    
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #f8f9fa;

        --negative: #E83F5B;
        --sucess: #3FE864;
    }

    .container {
        max-width: 50rem;
        margin: 0 auto;
        width: 100%;
        padding: 1rem;
    }

    .container2 {
        max-width: 25rem;
        margin: 0 auto;
        width: 100%;
        padding: 1rem;
    
    }

   
`