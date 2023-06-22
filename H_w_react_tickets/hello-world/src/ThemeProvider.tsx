import './app.scss';
import { createContext, useState } from "react";

const ThemeContext = createContext({});

function ThemeProvider(props: { children: any }) {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeProvider
}

