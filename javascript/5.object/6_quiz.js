// 객체 생성자 함수 - 객체 모델링(어떻게 바라볼건지... 반려동물, 동물병원...)
// dog, cat, rabbit... 의 객체 생성자 함수를 정의하고, 호출해보세요.
// 속성(Arrtibute, property) : name, color, emoji
// 메소드(Method): display, eat('🐶🐱🐰가 먹는다'), sleep('🐶🐱🐰가 자요)
function Animal(name, color, emoji){
    //field
    this.name = name;
    this.color = color;
    this.emoji =emoji;
    
    //method 
    this.display=()=>console.log(this.emoji);
    this.eat=()=>console.log(`${emoji}(이)가 먹어요.`);
    this.sleep=()=>console.log(`${emoji}(이)가 잠들었어요.`);
}

const dog = new Animal("dog", "brown", "🐶");
const cat = new Animal("cat", "orange", "🐱");
const rabbit = new Animal("rabbit", "gray-white", "🐰");

console.log(dog);
console.log(cat);
console.log(rabbit);

dog.display();
dog.eat();
dog.sleep();

cat.display();
cat.eat();
cat.sleep();

rabbit.display();
rabbit.eat();
rabbit.sleep();