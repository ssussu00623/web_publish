// 객체에서 기능을 실행하는 메소드 
// 객체 리터럴 안에 포함된다. 
const apple = {
    name: "apple",
    color: "Red",
    emoji: "🍎",
    display: function () {console.log("🍎"); },
    //사과 안에 포함되어있는 함수이기 때문에 이름 없는 함수가 된다. 매소드라고 부른다.
    getName: function (){console.log(this.name);},
    getcolor: function(){console.log(this.color)},
    getemoji: function(){console.log(this.emoji)}
    }
//apple.name과 같지만 스스로를 지칭하는 기능인 this를 사용함
//callstack에서 값을 찾기 때문에 this를 붙여준다. let name을 준 적이 없으니 찾아갈 수 있도록 주소를 부여한 것. 

console.log(apple);
apple.getName();
apple.getcolor();
apple.getemoji();
apple.display(); // 이름은 없지만 함수로 정의되기 때문에 (매소드) ()를 꼭 넣어준다.
// .display();로는 값이 출력되지 않는다. 