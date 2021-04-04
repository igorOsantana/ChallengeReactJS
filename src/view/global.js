import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@media(max-width: 720px) {
  html {
    font-size: 80%;
  }
}
@media(max-width: 480px) {
  html {
    font-size: 65%;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #292929;
  color: #f1f1f1;
}
body,
  input,
  textarea,
  button {
  font: 400 16px "Inter", sans-serif;
}
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
`;