import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --primary: #0b0d17;
    --secondary: #d0d6f9;
    --highlight: #ffffff;
    --font-title: 'Cinzel', serif;
    --font-primary:'Roboto', sans-serif;
    --font-secondary: 'Barlow Condensed', sans-serif;
    --font-size-heading-1: 8rem;
    --font-size-heading-2: 4rem;
    --font-size-heading-3: 2rem;
    --font-size-heading-4: 1.8rem;
    --font-size-heading-5: 1.5rem;
    --font-size-subheading-1: 1.1rem;
    --font-size-subheading-2: 0.6rem;
    --font-size-nav-text: 0.7rem;
    --font-size-text-content: 1.3rem;
    --font-space-heading-5: 0.5rem;
    --font-space-subheading-2: 0.25rem;
    --font-space-nav-text: 0.2rem;

}

    html {
      font-size: calc(60% + 0.8vmin);
    }

    body {
        margin: 0;
        padding: 0;
    }

    * {
        font-size: 1rem;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

`;
