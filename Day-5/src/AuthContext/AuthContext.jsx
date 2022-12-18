import { createContext,useState } from "react"

export const AuthContext  = createContext();

function AuthContextProvider({children}){
const [baseUrl , setBaseUrl] = useState("/");
const [user,setUser] = useState("Sign In");
const [isAuth,setIsAuth] = useState(false);
return (
    <AuthContext.Provider value={{ baseUrl, setBaseUrl,user,setUser,isAuth,setIsAuth }} >
    {children}
    </AuthContext.Provider> 
)
}

export default AuthContextProvider