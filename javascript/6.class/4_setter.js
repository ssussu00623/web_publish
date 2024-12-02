// 프라이빗으로 중요값을 감췄을 때 변수에 내부에 있는 메소드를 통해 열어주고,
// 외부에서는 메소드 함수를 통해 접근하는 것

// 클래스에서 정의되는 메소드로 , #(private)로 접근제어가 설정된 필드에 
// 새로운 값을 입력하기 위한 메소드이다. 
// setterXXX(입력되는 값), getter() <= 꺼내오는 거라 프라미터값이 없어도 된다
console.clear();

class Employee {
    //외부에서 접근 할 수 없게 한다.
    #empno;
    constructor(empno, ename, dept){
        this.#empno = empno;
        this.ename = ename;
        this.dept = dept;
    }
    //외부에서 접근할 수 없는 정보를 접근할 수 없는 정보를 수정하게하고
    setEmpno=(empno)=> this.#empno=empno;
    setEname=(ename)=> this.ename = ename;
    setDept=(dept)=> this.dept = dept;
    //외부에서 접근할 수 없는 정보를 출력한다.
    getEmpno=()=> this.#empno;
    getEname=()=> this.ename;
    getDept=()=> this.dept;
    //제한된 정보 출력과 모든 정보 출력
    info = ()=> console.log(`${this.ename},${this.dept}`);
    infoAll = ()=> console.log(`${this.#empno},${this.ename},${this.dept}`);
    
}
const hong = new Employee('1234', '홍길서', '개발1팀');
hong.info();
hong.infoAll();
hong.setEmpno('12345')
hong.setEname('홍홍')
hong.setDept('물류관리')
hong.infoAll();
console.log(hong.getEmpno());
console.log(hong.getEname());
console.log(hong.getDept());
