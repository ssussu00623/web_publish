//static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함

class Fruit {
    constructor (name, color, emoji) {
        this.name =name;
        this.color =color;
        this.emoji =emoji;
    }
    static makeFruit = () => {
        return new Fruit('orange', 'coral', '🍊'); 
        //static은 클래스가 힙에 저장된 것과 다르게 스태틱을 위한 공간에 보관한다
    };
    display =()=> console.log(`${this.name}, ${this.color},${this.emoji}`);
}

let apple = new Fruit('apple', 'red', '🍎'); //사과의 경우 객체를 만들어낸 것
apple.display();
//오렌지는 객체를 생성하지 않고 return하는 값을 호출한다. 
let orange=Fruit.makeFruit(); //콜스택에서 스태틱으로 가도록 호출해야함 
console.log(orange);
orange.display();

// apple.makeFruit(); <- 호출되지 않는다. 
/* 
    static은 메소드들에게만 붙고 static이라는 별도의 저장공간을 만드는것이기 떄문에.... 
    자신이 포함되지 않은 이름의 호출은 응답할수 없다.(클래스의 이름이 붙어야한다는 것)
    (class도 결국 별도의 공간 생성인지라) 
    static 메소드는 서로를 레퍼런스 할 수 있다...
*/

/* 총정리?
    변하지 않는 값, 객체를 생성하기 전에 호출되어야하는 것들을 
    static을 이용해 별도의 메모리 공간에 저장해둔다.
    static이 붙은 자료들은 스태틱이 붙은 자료만 레퍼런스 할 수 있기 때문에
    꼭 스태틱이 붙어야함...
*/