//학생(Student) 클래스 
// 속성: #이름 #나이 #주소 별칭 <= 자바스크립트만 #으로 프라이빗 처리가 된다.
// 메소드: setter / getter 메소드 정의

class Student {
    #name
    #age
    #adress
    constructor(name, age, adress, nickName) {
        this.#name= name;
        this.#age= age;
        this.#adress= adress;
        this.nickName= nickName;
    }
    /*
    getName=()=> this.#name;
    getAge=()=>this.#age;
    getAdress=()=>this.#adress;
    getNickName=()=>this.nickName;
    */
    // !! set/get 함수 형식은 private 정의된 필드값에 한해서 생성한다. 
    get name(){return this.#name;}; //이 방식도 가능하다! 하지만 이 경우 블레이스가 꼭 필요 
    get age(){return this.#age;};
    get adress(){return this.#adress;};  
    get nickName(){return this.nickName;};
    // get name =()=> this.#name;
    /*
    setName=(name)=> this.#name=name;
    setName=(age)=> this.#age=age;
    setName=(adress)=> this.#adress=adress;
    setName=(nickName)=> this.nickName=nickName;
    */
    
    set name(name){this.#name = name;}
    set age(age){this.#age = age;}
    set adress(adress){this.#adress = adress;}

    info=()=> console.log(`${this.nickName}}`);
    infoAll=()=> console.log(`${this.#name}, ${this.#age}, ${this.#adress}, ${this.nickName}}`);
}

const hong = new Student('홍길동', 20, '서울시 강남구', '동동')

console.log(hong);
// console.log(`${hong.getName()}\n${hong.getAge()}\n${hong.getAdress()}\n${hong.getNickName()}`);
//\n 문단 바꾸기

console.log(`${hong.name}\n${hong.age}\n${hong.adress}\n${hong.nickName}\n`);
