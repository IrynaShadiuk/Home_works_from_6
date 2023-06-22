import Header from "./components/header/Header";
import Users from "./components/Users/Users";
import Tickets from "./components/Tickets/Tickets";
import './app.scss'
import {Routes, Route} from 'react-router-dom'
import Main from "./components/main/Main";
import { useContext, useEffect } from "react";
import { MediaQueryContext } from "./MediaQueryProvider";



function App() {
  const { setMobile } = useContext(MediaQueryContext) as any;

  useEffect(() => {
    const width = document.body.clientWidth;

    if (width < 500) {
      setMobile(true)
    } else {
      setMobile(false);
    }
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>Home</Route>
        <Route path="/users" element={<Users />}>Users</Route>
        <Route path="/ticket" element={<Tickets />}>Tickets</Route>
      </Routes>
    </div>
  )
}


export default App;


