export const fruitsTower =(emoji, floor)=>{
    for(let a=1; a<=floor; a++) {
        let tower= '';
        for(let b=1; b<=a; b++){
            tower += emoji;
        } 
        console.log(tower);
    } 
}