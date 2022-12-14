import { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [windowSize, setWindowSize] = useState(getWindowSize())
    const [device, setDevice] = useState()

    const GlobalContext = createContext()

    useEffect(() => {
      function handleWindowResize() {
        const sizes = getWindowSize()
        setWindowSize(sizes)
        if (sizes.innerWidth < 768) {
            setDevice('mobile')
        } else if(sizes.innerWidth < 992 ) {
            setDevice('tablet')
        } else {
            setDevice('desktop')
        }
      }
  
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
 
    return (
        <GlobalContext.Provider value={{device}}>
            {children}
        </GlobalContext.Provider>
    )
}
