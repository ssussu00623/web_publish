// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원==> Member 부모 클래스 생성 (name, age, address)

class Member {
    #name;
    #age;
    #address;
    constructor(name, age, address) {//자식 클래스 생성자함수에서 super호출
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }
    get name(){return this.#name;}
    get age(){return this.#age;}
    get address(){return this.#address;}
}

class Student extends Member {
    #sno;
    constructor(sno,name, age, address) {
        super(name, age, address);
        this.#sno = sno;
    }
    get sno(){return this.#sno;} //프라이빗에 만들어지면 ~ 데이터가 있는 곳에 메소드를 만들어줘야함 
    // 전체 값을 반환하는 함수 정의
    //객체명.values
    //values = () => [this.name, this.age, this.address, this.#sno];//하나가 아니니 []에 담아서 반환} 

    //객체명.values
    get values() {
        return[this.name, this.age, this.address, this.#sno];
    }
}
/**Professer Class */
class Professer extends Member {
    #subject;
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.#subject=subject
    }
    get subject(){return this.#subject;}
    //객체명.values
    get values() {
        return[this.name, this.age, this.address, this.#subject];
    }
}
/**Parent Class */
class Parent extends Member {
    #cname
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.#cname = cname;
    }
    get cname(){return this.#cname;}
    get values() {
        return[this.name, this.age, this.address, this.#cname];
    }
}
/**Employee Class */
class Employee extends Member {
    #department
    constructor(name, age, address, department) {
        super(name, age, address);
        this.#department = department;
    }
    get department(){return this.#department;}
    get values() {
        return[this.name, this.age, this.address, this.#department];
    }
}
//signup 버튼 클릭시 호출되는 함수 
const signupCheck = ()=> {
    let type = document.querySelector("input[type=radio]:checked");
    let name, age, address, sno, subject, cname, department;
    /*
    let sno = document.querySelector("#sno");
    let name = document.querySelector("#name");
    let address = document.querySelector('#address');
    let age = document.querySelector("#age");
    let cname = document.querySelector("#cname");
    let subject = document.querySelector('#subject');
    let department = document.querySelector('#department');
        */
    let member = null; // type에 따라서 각각의 클래스 생성
    switch(type.value) {
        case '1': 
        name = document.querySelector("#student #name") //중복되는 값이 있을 때~ 다른 값도 모두 같이 정의되어있다면 학생 값으로만 출력됨! 태그로 구분해둬야 정상 출력!
        age = document.querySelector("#student #age")
        address = document.querySelector("#student #address")
        sno = document.querySelector("#student #sno")
        member=new Student (sno.value,
                                    name.value, 
                                    age.value, 
                                    address.value); break;
        case '2': 
        name = document.querySelector("#professer #name")
        age = document.querySelector("#professer #age")
        address = document.querySelector("#professer #address")
        subject = document.querySelector("#professer #subject")
        member=new Professer (name.value, 
                                    age.value, 
                                    address.value, 
                                    subject.value); break;
        case '3': 
        name = document.querySelector("#parent #name")
        age = document.querySelector("#parent #age")
        address = document.querySelector("#parent #address")
        cname = document.querySelector("#parent #cname")
        member=new Parent (name.value, 
                                    age.value, 
                                    address.value, 
                                    cname.value); break;
        case '4': 
        name = document.querySelector("#employee #name")
        age = document.querySelector("#employee #age")
        address = document.querySelector("#employee #address")
        department = document.querySelector("#employee #department")
        member=new Employee (name.value, 
                                        age.value, 
                                        address.value, 
                                        department.value); break;
        default:
    }
    console.log(member);
    // 자바스크립트로 생성되는 HTML을 Dynamic HTML(DHTML/동적HTML)로 호출된다.
    //let list = Object.keys(member); // ['name', 'age', 'address', 'sno']
    // ==> 퍼블릭일 때 사용할 수 있는 방법 . class의 필드값이 private인 경우에만 가져올 수 없음 ! ! 
    let list = '';
    member.values.forEach((item/*아무거나 들어가도 됨*/) => {
        list += `<li>${item}</li> `;
    });

    
    
    let output = `<ul>${list}</ul>`;
    document.querySelector("#result").innerHTML = output;     
} // end of signupCheck





// display : 라디오 버튼 선택시 화면을 전환시키는 함수 
const display =(type/*문자가 넘어오는 거니까*/) => {
    document.querySelector("#result").innerHTML ='';
    // type = 1 학생폼 노출하기... 와 코드 단순화하기 
    document.querySelector('#student').style.display = "none";
    document.querySelector('#professer').style.display = "none";
    document.querySelector('#parent').style.display = "none";
    document.querySelector('#employee').style.display = "none";
    if(type === '1'){
    document.querySelector('#student').style.display = "block";
    /*
    document.querySelector('#professer').style.display = "none";
    document.querySelector('#parent').style.display = "none";
    document.querySelector('#employee').style.display = "none";
    */
    } else if(type === '2'){
        document.querySelector('#professer').style.display = "block";
        /*
        document.querySelector('#student').style.display = "none";
        document.querySelector('#parent').style.display = "none";
        document.querySelector('#employee').style.display = "none";.*/
}
    else if(type === '3'){
        document.querySelector('#parent').style.display = "block";/*
        document.querySelector('#student').style.display = "none";
        document.querySelector('#professer').style.display = "none";
        document.querySelector('#employee').style.display = "none";*/
}
    else if(type === '4'){/*
        document.querySelector('#student').style.display = "none";
        document.querySelector('#professer').style.display = "none";
        document.querySelector('#parent').style.display = "none";*/
        document.querySelector('#employee').style.display = "block";
    } // if end
} //end of display

/* 내부 테스트용... 이렇게 테스트로 오류 없다는 걸 확인 후 html과 연결하는 작업을 해야한다. 
const hong = new Student('1234', '홍길동', 20, '서울시 강남구');
const smith = new Professer ('smith', 40, '서울시 서초구', 'javasctipt');
const hongp= new Parent('홍길순', 60, '서울시 강남구', '홍길동')
const lee = new Employee('이철수', 30, '부산시 해운대구', '개발1팀')

console.log(`***학생정보***`);
console.log(`학번: ${hong.sno}\n이름: ${hong.name}\n주소: ${hong.address}\n나이: ${hong.age}\n`);
console.log(`***교수정보***`);
console.log(`이름: ${smith.name}\n주소: ${smith.address}\n나이: ${smith.age}\n과목명: ${smith.subject}\n`);
console.log(`***학부모정보***`);
console.log(`이름: ${hongp.name}\n주소: ${hongp.address}\n나이: ${hongp.age}\n자녀: ${hongp.cname}\n`);
console.log(`***직원정보***`);
console.log(`이름: ${lee.name}\n주소: ${lee.address}\n나이: ${lee.age}\n부서명: ${lee.department}\n`);
*/

