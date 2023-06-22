import Header from "./components/header/Header";
import './app.scss';
import React, { useContext } from "react";

interface IContext {
  title: string;
}

const TitleContext = React.createContext({} as IContext);

function App() {
  const context = {
    title:'My title'
  };

  return (
    <div className="App">
      <Header />
      <TitleContext.Provider value={context}>
        <FirstWrapper />
      </TitleContext.Provider>
    </div>
  );
}

const FirstWrapper = () => <SecondWrapper />;

const SecondWrapper = () => <ThirdWrapper />;

const ThirdWrapper = () => {
  const context: IContext = useContext(TitleContext);
  console.log(context);

  return (
    <h1>Title: {context.title}</h1>
  )
}

export default App;