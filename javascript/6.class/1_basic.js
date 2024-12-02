// 객체를 생성하기 위한 틀 ==> class(클래스)
/*
    class 클래스명 {
    // 생성자처럼 필드가 아닌! constructor(생성자) 함수로 고정.
    //constructor()
        //filed, 외부에서 들어오는 값
        this.필드명 = value;

    //메소드
    }
*/

class Animal {
    //생성자함수
    constructor(emoji, color){
        this.emoji = emoji;
        this.color = color;
    }
    //메소드
    display=()=> console.log(this.emoji);
}

const dog = new Animal('🐕', 'gold');

dog.display();

