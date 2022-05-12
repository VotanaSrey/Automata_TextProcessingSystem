import "./App.css";
import Header from "./components/layouts/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Application, History, Team } from "./pages";
import DfaApplication from "./pages/Application/DFA_Application/DfaApplication";
import DfaResult from "./pages/Application/DFA_result/DfaResult";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Application />} />
          <Route path="dfa_application" element={<DfaApplication />} />
          <Route path="dfa_result" element={<DfaResult />} />
          <Route path="history" element={<History />} />
          <Route path="team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
