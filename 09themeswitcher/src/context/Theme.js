import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //taking an object of values to paa to the function
    themeMode: 'light',
    darkTheme: () =>{},
    lightTheme: () =>{},
});


//making the code knows the component using the variable name
export const ThemeProvider = ThemeContext.Provider;


export default function useTheme(){
    return useContext(ThemeContext)
}