import Footer from "./Containers/Footer";
// import Header from "./Containers/Header";
import Main from "./Containers/Main";
import Nav from "./Containers/Nav";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { GlobalStyles } from "./styles/GlobalStyles";

library.add(faStarSolid, faStarRegular);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Header /> */}
      <Nav />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
