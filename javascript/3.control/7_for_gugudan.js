console.log( "----------------------------");
//console.clear();
// 터미널에 clear 한 것

// 구구단 2단을 출력
/*
    2*1 = 2
    ...
    2*9 = 18
*/

for(let g=1; g<10; g++){
    console.log(`2 * ${g} = ${g*2}`);
}
console.log( "----------------------------");
// 구구단 2단부터 9을 출력
/*
    2*1 = 2
    ...
    2*9 = 18
*/
for(let z=1; z<=9; z++){
    let rows ='';  //콘솔로그는 1줄씩만 출력이 가능함... 그러니 중간 값을 저장하고출력한다는 느낌으로...
    for(let x =2; x<=9; x++){
        rows += `${x} * ${z} = ${x*z}\t`;
    }
    console.log(rows);
}

console.log( "----------핫케이크 만들기----------");

for(let q=1; q<6; q++) {
    let rows= '';
    for(let w=1 ; w<=q; w++){ // q가 변하는 만큼 w도 증가한다. 1행이 늘어날 때마다 1열도 늘어나는 것 
        rows += `🥞`
    } console.log(rows);
    } 


console.log( "----------와플 만들기----------");
// q를 기준으로 움직이기 때문에 (q의 숫자에서 w의 숫자까지 도달하는 거라서) q값만 수정해도 반영이 가능하다.
for(let q=5; q>0; q--) {
    let rows= '';
    for(let w=q ; w>=1; w--){ // q가 변하는 만큼 w도 증가한다. 1행이 늘어날 때마다 1열도 늘어나는 것 
        rows += `🧇`
    } console.log(rows);
    } 

    /* 인터넷에 나온 방법  이건 다 바꿔야함
    for(let q=5; q>0; q--) {
    let rows= '';
    for(let w=0 ; w<q; w++){ 
        rows += `🧇`
    } console.log(rows);
    } 
    */