import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useRouter } from 'next/router';

const barContextDefaultValues= {
    bar: false,
    openBar: () => {},
    closeBar: () => {},
}

const BarContext = createContext(barContextDefaultValues);

export function BarState() {
    return useContext(BarContext);
  }

  export const State = ({ children }) => {
    // const router = useRouter();
    const [bar, setBar] = useState(false)

    const openBar = () => {
      console.log("how")
        setBar(true);
      };
    
      const closeBar = () => {
        console.log("close")
        setBar(false);
      };

      const value = {
        bar,
        openBar,
        closeBar
      }  
      
      return (
        <>
          <BarContext.Provider value={value}>{children}</BarContext.Provider>
        </>
      );
  }