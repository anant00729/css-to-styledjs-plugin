import Home from "./pages/home";
import Header from "./components/header";
import { GlobalProvider } from "./global/GlobalContext";
import Alerts from "./components/alert";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Home />
      <Alerts />
    </GlobalProvider>
  );
}

export default App;
