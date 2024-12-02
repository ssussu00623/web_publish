// 클래스 간의 상속관계
// E동물원에서 동물관리 프로그램을 생성
// 흰색사자, 회색사자, 흰색 호랑이, 회색 호랑이, 푸들, 말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스


//Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 (공통점인 부분을)
//Animal 클래스 속성: name, color, emoji, taste
//Animal 클래스 메소드: display, eat, sleep

/*
    class에서 쓰는 지칭~? 언어가 .this랑 super뿐! 
*/

class Animal { //부모 class 자식마다 부모가 하나씩 생성되고 식제되면 부모도 삭제된다. 
    constructor(name, color, emoji, taste) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }   
    display = ()=> console.log(`${this.name}:${this.emoji}`);
    sleep = ()=> console.log(`${this.name}(이)가 자요.`);
    eat = ()=> console.log(`${this.name}(이)가 먹어요.`);
}


// Lion 클래스
// 속성: name, color, emoji, taste(식성), age(s나이)
// 메소드: display(이모지), sleep, eat 

class Lion extends Animal { //자식 class
    constructor(name, color, emoji, taste) { //부모 값에 있다고 해서 지우면 안 됨. 자식도 이런게 있다는... 표식이 필요함. 
        super(name, color, emoji, taste);//항상 위에! 있어야 한다. extends가 없는데 super쓰면 오류! 남
    }
    /*
    display = ()=> console.log(`${this.name}:${this.emoji}`);
    sleep = ()=> console.log(`${this.name}(이)가 자요.`);
    eat = ()=> console.log(`${this.name}(이)가 먹어요.`);
    매소드는 기능이기 때문에 ~ 지정을 하지 않아두 댐. 

    부모가 가지고 있기 때문에 주석처리해도 정상 출력된다.*/
}

// Tiger 클래스
// 속성: name, color, emoji, taste(식성)
// 메소드: display(이모지), sleep, eat 
class Tiger extends Animal { 
    constructor(name, color, emoji, taste, age) {
        super(name, color, emoji, taste);
        this.age = age;
    }
    /*
    display = ()=> console.log(`${this.name}:${this.emoji}`);
    sleep = ()=> console.log(`${this.name}(이)가 자요.`);
    eat = ()=> console.log(`${this.name}(이)가 먹어요.`);
    */
    getAge=()=> console.log(this.age);    
}

// Dog 클래스
// 속성: name, color, emoji, taste(식성)
// 메소드: display(이모지), sleep, eat 
class Dog extends Animal { 
    constructor(name, color, emoji, taste, type) {
        super(name, color, emoji, taste);
        this.type = type;
    }
    /*
    display = ()=> console.log(`${this.name}:${this.emoji}`);
    sleep = ()=> console.log(`${this.name}(이)가 자요.`);
    eat = ()=> console.log(`${this.name}(이)가 먹어요.`);*/
    getType=()=> console.log(this.type);
    
}

/**
 * 동물원에서동물을 관리하는 클래스
 * 속성: type, 동물 객체(Lion, Tiger, Dog)
 * 메소드: setter/getter
 */

class EverZoo {
    static LION = 1; // 상수로 값을 주려면 무조건 대문자 
    static TIGER = 2; 
    static DoG =3;

    #type;
    #animal;
    constructor(type, animal) {
        this.#type =type;
        this.#animal =animal;
    }
    get type() {return this.#type;}
    get animal() {return this.#animal;}
    set type(type) {this.#type =type;}
    set animal(animal) {this.#animal=animal;}
}



//클래스 생성 및 호출
const tom = new Lion("tom","white", "🦁", "육식")
const smith = new Tiger("smith","gray", "🐯", "육식", 3)
const judy = new Dog("judy","black", "🐶", "잡식", "푸들")

tom.display(); tom.sleep(); tom.eat();
smith.display(); smith.sleep(); smith.eat(); smith.getAge();
judy.display(); judy.sleep(); judy.eat(); judy.getType();

const everZoo=new EverZoo(EverZoo.LION, tom);
console.log(everZoo.type, everZoo.animal);

