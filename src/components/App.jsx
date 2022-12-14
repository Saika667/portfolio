import React, { useState } from 'react';
import Header from './Header';
import { ThemeProvider } from 'styled-components'
import colors from '../utils/styles/colors';
import { GlobalProvider } from '../utils/context/global'

function App({ children }) {
    const [currentTheme, setTheme] = useState('dark')

    
    return (
        <div>
          <GlobalProvider>
            <ThemeProvider theme={currentTheme === 'dark' ? colors.darkMode : colors.lightMode}>
              <Header currentTheme={currentTheme} setTheme={setTheme}/>
              {children}
            </ThemeProvider>
          </GlobalProvider>
        </div>
    );
}

export default App;