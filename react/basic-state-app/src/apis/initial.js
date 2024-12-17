/**
 * Form 초기화이름 생성 함수
 */

export const initFormName = (initArray)=>{
    const init = initArray.reduce((acc, key)=> {
        acc[key] = '';
        return acc;
    }, {});
    return init;
}