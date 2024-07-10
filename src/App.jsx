import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Question from "./components/Question";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content></Content>
      <Content2></Content2>
      <Content3></Content3>
      <Question></Question>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
