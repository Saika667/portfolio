import React, { useState } from 'react';
import Header from './Header';
import { ThemeProvider } from 'styled-components'
import colors from '../utils/styles/colors';
import { GlobalProvider } from '../utils/context/global'

function App({ children }) {
    // On initialise le theme grace au localStorage s'il existe, dark sinon
    const savedTheme = localStorage.getItem('theme')
    const [currentTheme, setTheme] = useState(savedTheme !== null ? savedTheme : 'dark')

    // Surcharge de la fonction du state (setTheme) de manière à enregistrer le theme en localStorage
    function setThemeAndStorage(themeType) {
      setTheme(themeType)
      localStorage.setItem('theme', themeType)
    }
    
    return (
        <div>
          <GlobalProvider>
            <ThemeProvider theme={currentTheme === 'dark' ? colors.darkMode : colors.lightMode}>
              <Header currentTheme={currentTheme} setTheme={setThemeAndStorage}/>
              {children}
            </ThemeProvider>
          </GlobalProvider>
        </div>
    );
}

export default App;