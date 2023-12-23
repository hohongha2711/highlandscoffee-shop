import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import FlashSale from "./Pages/FlashSale";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Introduction from "./Pages/Introduction";
import store from "./Store/store";
import { Provider } from "react-redux";
import HederMain from "./Components/Layout/Header/HederMain";
import DealPresent from "./Pages/DealPresent";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route component={HederMain} />
          <Route path = "/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="flash-sale" element={<FlashSale />}/>
            <Route path="gioi-thieu" element={<Introduction />}/>
            <Route path="san-pham-noi-bat" element={<DealPresent />}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
