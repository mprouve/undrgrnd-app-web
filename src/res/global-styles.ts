import { createGlobalStyle } from 'styled-components'

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
        background-color: ${({ theme }) => theme.colors.background};
        font-size: 62.5%;   /* Will make 1em = 10px */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body,
    #root {
        ${'' /* user-select: none; */}
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        font-family: ${({ theme }) => theme.typography.fontFamily};
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
        font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: ${({ theme }) => theme.colors.text.link.standard};
        text-decoration: none;
        outline : none;
    }

    a:visited {
        color: ${({ theme }) => theme.colors.text.link.visited};
    }

    a:active {
        color: ${({ theme }) => theme.colors.text.link.active};
    }
`
