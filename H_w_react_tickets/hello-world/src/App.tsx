import Header from "./components/header/Header";
import Users from "./components/Users/Users";
import Tickets from "./components/Tickets/Tickets";
import './app.scss'
import {Routes, Route, Link} from 'react-router-dom'
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />}>Home</Route>
        <Route path="/users" element={<Users />}>Users</Route>
        <Route path="/ticket" element={<Tickets />}>Tickets</Route>
      </Routes>
    </div>
  );
}

export default App;

