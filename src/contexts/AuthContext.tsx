import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextProviderProps{
    children:ReactNode
}

type AuthContextData = {
    firstName:string,
    handleFirstName: (name:string) => void
}

const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({children}:AuthContextProviderProps){
    const [firstName,setFirstName] = useState("")
    
    function handleFirstName(name:string){
        setFirstName(name)
    }

    return(
        <AuthContext.Provider value={{
            firstName,
            handleFirstName
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)