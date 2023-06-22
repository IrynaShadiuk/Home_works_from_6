import './app.scss';
import { createContext, useState } from "react";

const MediaQueryContext = createContext({});

function MediaQueryProvider(props: { children: any }) {
  // const checkIfMobile = () => {
  //   return document.body.clientWidth < 500;
  // }

  const [isMobile, setMobile] = useState<boolean>(false);

  return (
    // <MediaQueryContext.Provider value={checkIfMobile()}> 
    <MediaQueryContext.Provider value={{ isMobile, setMobile }}> 
      {props.children}
    </MediaQueryContext.Provider>
  )
}

export {
  MediaQueryContext,
  MediaQueryProvider
}

