import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root{
--main-color: #0aad0a;
--secondary-color:#001e2b;
--danger:#db3030;

--hover-primary:#099309;
--hover-secondary:#26404B;
--hover-pale:#C1C7C6;
--hover-danger:#b62121;
--border: #dfe2e1;

--text-dark:#21313c;
--text-light:#5C6C75;
--text-lightest:#ffffff;

--label:#3D4F58;

--footer-bg:#F0F3F2

}
*{
  text-transform: capitalize;
  padding: 0;
  margin: 0;
  font-family: 'Inter', 'serif';
  transition-duration: .3s;
  box-sizing: border-box;
}
.active {
  color: var(--main-color);
}


`;
export default GlobalStyle;
