import { createGlobalStyle } from "styled-components";
import { colors } from "./components/theme";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${colors.surfaceMuted};
        color: ${colors.textDark};
    }
`;

export default GlobalStyles;