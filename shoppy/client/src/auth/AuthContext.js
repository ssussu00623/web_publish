import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(()=> {
        try {
            const token = localStorage.getItem("token");
            return token ? true : false;
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류:", error);
            return false; // 오류 발생 시 빈 배열 반환
        }
    });

    // 토큰이 있으면 로그인 상태 유지
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}


// // 인증 관련 전역 파일
// import { createContext, useState, useEffect } from "react";

// //useState가 로그인 토큰 값이 있는지 없는지 관리한다. (리액트는 새로고침 되지 않으니까)
// //useEffect가 들어오는 값을 관리...

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//     const [isLoggedIn, setIsLoggdIn] = useState(()=>{
//         try {  
//             const token = localStorage.getItem("token");
//             return token ? true : false ;
//           // 가져온 제이슨 데이터가 있다면 출력하고 없다면 빈 값을 리턴한다.
//         } catch (error) {
//             console.log('로컬스토리지 JSON 파싱 오류', error);
//             return false;
//         }
//     })
//     useEffect (()=>{
//         const token = localStorage.getItem("token");
//         setIsLoggdIn(!!token);
//     }, [])

// return (
//     <AuthContext.Provider value={{isLoggedIn, setIsLoggdIn}}>
//         {children}
//     </AuthContext.Provider>
// )
// }
// //AuthProvider로 감싸고 잇는 것들에 영향을 주기 위해... children으로 주기 
// /**
//  * <AuthProvider>
//  *  <app />
//  * </AuthProvider>
//  * 이런 식으로 ~ app 컴포넌트들이 실행되기 전에 </AuthProvider>의 영향을 받는다. 
//  */