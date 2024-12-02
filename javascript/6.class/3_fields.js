// class의 filed는 생성자함수에서정의하는 값이다. 
// filed에 접근 제어를 정의 : private(#이 붙으면 프라이빗), public

class Fruit{
    //constructor
    #name; //인스턴스.name 형식으로 외부에서 호출하는경우 데이터를 숨긴다. (호출되지X) 
    constructor(name, color, emoji) {
        this.#name = name;
        this.color=color;
        this.emoji=emoji;
    }
    display=()=> console.log(`${this.#name},${this.color},${this.emoji},` );
                            //내부에서 호출하는 것이기 때문에 출력이 가능함
}

const apple = new Fruit('apple', 'green', '🍏');
apple.display();
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);


console.log('---------혼자 해보기---------');
//사번(#), 사원명, 부서명
//info() 메소드 호출시 모든 정보 출력
class Employee {
    #cnumber
    constructor(cnumber, name, department) {
        this.#cnumber=cnumber;
        this.name=name;
        this.department=department;
    }
    info=()=> console.log(`${this.name}, ${this.department}`);
    infoAll=()=> console.log(`${this.#cnumber},${this.name}, ${this.department}`);
}
const employee1 = new Employee('123', '홍길동', '인사처')
const employee2 = new Employee('456', '홍길북', '인사처')
const employee3 = new Employee('789', '홍길남', '인사처')
employee1.info();
employee1.infoAll();
employee2.info();
employee2.infoAll();
employee3.info();
employee3.infoAll();
