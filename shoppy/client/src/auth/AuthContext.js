// 인증 관련 전역 파일
import { createContext, useState, useEffect } from "react";

//useState가 로그인 토큰 값이 있는지 없는지 관리한다. (리액트는 새로고침 되지 않으니까)
//useEffect가 들어오는 값을 관리...

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggdIn] = useState(false)
    useEffect (()=>{
        const token = localStorage.getItem("token");
        setIsLoggdIn(!!token);
    }, [])

return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggdIn}}>
        {children}
    </AuthContext.Provider>
)
}
//AuthProvider로 감싸고 잇는 것들에 영향을 주기 위해... children으로 주기 
/**
 * <AuthProvider>
 *  <app />
 * </AuthProvider>
 * 이런 식으로 ~ app 컴포넌트들이 실행되기 전에 </AuthProvider>의 영향을 받는다. 
 */