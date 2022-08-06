import { createGlobalStyle } from "styled-components"
import theme from "./theme"

// export const lightTheme = {
//   body: "#fffff",
//   main: "#5C14DB",
//   mainColor: "#FFFFFF",
//   accent: "#E5DE17",
//   accentColor: "#161616",
//   secondary: "#FFFFFF",
//   secondaryColor: "#343434",
//   dullColor: "#343434",
//   ternary: "#000000",
//   codeColor: "#D121C5",
// }

export const GlobalStyles = createGlobalStyle`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        border: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #000000;
        font-size: 62.5%;   /* Will make 1em = 10px */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body,
    #root {
        ${"" /* user-select: none; */}
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        font-family: ${theme.typography.fontFamily};
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
        outline : none ;
    }

    ${
      "" /* body::-webkit-scrollbar {
        display: none;
    } */
    }
`
