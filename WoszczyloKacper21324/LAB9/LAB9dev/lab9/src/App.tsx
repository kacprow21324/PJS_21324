import React from "react";
import './App.css';
import './Test.tsx';
import './Test2.tsx';
import './Test3.tsx';
import './ThemeContext.tsx';
import './Test5.tsx';

import Test from './Test.tsx';
import Test2 from './Test2.tsx';
import Test3 from './Test3.tsx';
import { useTheme, ThemeProvider } from "./ThemeContext.tsx";
import Test5 from './Test5.tsx';

function ThemeSwitcher() {
    const { dark, toggleTheme } = useTheme();
    return (
        <div style={{ background: dark ? "#333" : "#fff", color: dark ? "#fff" : "#000" }}>
            <button onClick={toggleTheme}>Przełącz motyw</button>
        </div>
    );
}

function App() {
  return (
      <div>
          <h1>Test licznika kliknięć: useRef</h1>
          <Test/>
          <hr/>
          <h1>Ilość liczb pierwszych: useMemo</h1>
          <Test2/>
          <hr/>
          <h1>Podaj imie i nazwisko: useReducer</h1>
          <Test3/>
          <hr/>
          <h1>Zmiana koloru tła: useContext</h1>
          <ThemeProvider>
              <ThemeSwitcher />
          </ThemeProvider>
          <hr/>
          <h1>Pomiar wysokości komponentu: useLayoutEffect</h1>
          <Test5/>
          



      </div>
  );
}

export default App;
