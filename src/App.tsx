import Main from "./Containers/Main";
import Nav from "./Containers/Nav";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { GlobalStyles } from "./styles/GlobalStyles";
import Footer from "./Containers/Footer";
import { BrowserRouter } from "react-router-dom";

library.add(faStarSolid, faStarRegular);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        {/* <Header /> */}
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
