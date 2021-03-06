import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


                /* RESET CSS */


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'Lexend Deca', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
      
:visited { color: transparent }                      
:link:active, :visited:active { color: transparent }  
:link, :visited { text-decoration: none; cursor: pointer; }
a:link[rel~=help], a:visited[rel~=help],
area:link[rel~=help], area:visited[rel~=help] { cursor: help; }

input{
	box-sizing: border-box;
	padding: 10px;
}

::placeholder{
	color: #dbdbdb;
	font-size: 19px;
}

:root{
	--logo-main-color: #126BA5;
	--buttons-color: #52b6ff;
	--header-color: #126ba5;
	--check-color: #8fc549;
	--border-color: #d4d4d4;
	--background-color: #e5e5e5;
	--ion-color-secondary: #8FC549;
	--ion-color-primary: #d4d4d4;
;
}

`

export default GlobalStyle