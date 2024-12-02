// 생성자
// 객체를 생성해주는 객체 생성자 함수 정의와 사용법 익히기
// 생성자 함수는 대문자로 시작한다. 
function Fruit(name, color, emoji) {
    //field
    //콜스택에서 불러오는 것이 아니고 fruit에서 부르는 것이라 this를 꼭 붙여줘야한다
    this.name= name;
    this.color= color;
    this.emoji=emoji;
    // 1줄씩 처리되기 때문에 세미콜론을 넣어줘야함.

    //method
    //this.display= function(){console.log(this.emoji)}; 긴 버전
    this.display=()=>console.log(this.emoji); //arrow 버전
}
//각 값이 객체가 되도록 약속되어있어 return같은 걸 선언하지 않아도 된다.

const apple = new Fruit("apple", "Red", "🍎");
//heap에 apple이라는 주소값에 새로운 apple 값을 삽입하는 것이기 때문에 new를 넣어준다.
const orange = new Fruit("coral", "Red", "🍊");
const lemon = new Fruit("yellow", "Red", "🍋");
console.log(apple);
console.log(orange);
console.log(lemon);

/*
// apple : property - name, color : method-display()
const apple = {
    name: "apple",
    color: "Red",
    display: function () {console.log("🍎");}
}
// orange : property - name, color : method-display()
const orange = {
    name: "orange",
    color: "coral",
    display: function () {console.log("🍊");}
}
// lemon : property - name, color : method-display()
const lemon = {
    name: "lemon",
    color: "yellow",
    display: function () {console.log("🍋");}
}
    */