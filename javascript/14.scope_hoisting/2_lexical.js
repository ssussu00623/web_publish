// 자세히 볼일은 없지만 인터뷰를 위해~ 

/*
    lexical(렉시컬)
    - 실행컨텍스 안에 포함된 개념으로 스코프별로 메모리를 효율성있게 관리하는 영역
    - 변수 선언, 실행코드, 외부호출 코드
    - 콜스택(Call Stack)- 호출되는 코드 또는 함수를 순차적으로 실행
*/

{
    let a = 10;
    console.log(`a---> ${a}`);
    console.log(`aa---> ${aa}`);//하지만 여기엔 값이 없어.. 이름은 있으니 undefined
    {
        let b = 20;
        var aa = 100; // 전역으로 선언! 
        console.log(`b---> ${b}`);
        console.log(`aa---> ${aa}`);
        {
            let c = 30;
            console.log(`c---> ${c}`);
            console.log(`a---> ${a}`);
            console.log(`b---> ${b}`);
            var e = 100;
        } // level 2
    } // level 1
} // 전역scope


// 전역 scope 렉시컬 환경이 먼저생김> a값과 log a가 들어간다.
// 내부에 변수, 실행코드, 외부 연결이 들어감

// {}마다 렉시컬 환경이 만들어지는 것이니... level 1영역의 scope 렉시컬 환경이 생긴다. b값과 log b가 들어감
// level 2에는 c 와 log c가 들어감. (정확하게는 log값이 가는 건 아니지만 흐름상... )

//같은 {}에 묶여있지만 렉시컬 영역은 3개가 생기게 된다.
// 실행컨텍스트에 포함된 valiable Environment(변수저장 환경), Lexical Environment, eval funtion Environment(이건 권장X)

// js는 단일 스레드 방식이라 창고에 넣어준다는 개념이... 싱글 스레드로 구성되어있다는 소리 
// 스레드의 역할을 콜스택이 하고 있다. 정보를 저장하고 넣어두는 걸 실행 컨텍스트가 담당한다. 

//새로운 파일이 실행될 때마다 렉시컬 환경이 만들어지고 모든 log가 출력되면 삭제 된다.

//var로 선언하면 전역으로 이름이 선언되지만 값은 포함되어있는 렉시컬환경에서 부여되기 때문에 
// 레벨2에서 값을 부여하고 레벨 1에서 호출하면 호출에 오류는 없지만 undefinde로 뜬다.

//변수의 선언시 let과 const를 활용하여 정확한 스코프 범위설정이 중요하다.!!! 효율성을 높이는 방식 ~! 
