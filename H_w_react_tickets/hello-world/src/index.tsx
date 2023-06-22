
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider';
import { MediaQueryProvider } from './MediaQueryProvider';

const root = ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider>
      <MediaQueryProvider>
        <App />
      </MediaQueryProvider>
  </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
