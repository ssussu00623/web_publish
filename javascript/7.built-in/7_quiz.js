//1. 'Hello~ JavaSctipt !!!' 문자열을 한 문자씩 출력해주세요
let str = 'Hello~ JavaSctipt !!!';
for(let i=0; i<str.length; i++) {
    console.log(str[i]);
}

// 2. '독서, 수영, 영화, 게임, 사이클'
let hobbys = '독서, 수영, 영화, 게임, 사이클';
hobbys = hobbys.split(',');
console.log(hobbys);
for(let i=0; i<hobbys.length; i++) {
    console.log(hobbys[i].trim());
}

//간략하게 정리하여 활용해보기
hobbys.forEach((hobbys)=>console.log(hobbys.trim()));

