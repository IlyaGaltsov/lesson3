let twoDidgitNumber = parseInt(prompt('Enter your dwo-didgit number'));

if(isNaN(twoDidgitNumber)){
    console.log('Enter two-didgit Number')
}else if(twoDidgitNumber < 10 || twoDidgitNumber > 99){
    console.log('Enter two-didgit number please')
}else {

    const firstDidgit = Math.floor(twoDidgitNumber / 10);
    const secondDidgit = twoDidgitNumber % 10;

    if(firstDidgit > secondDidgit){
        console.log('first didgit biger that seond')
    }else if(secondDidgit > firstDidgit){
        console.log('second didgit biger that first')
    }else {
        console.log('Didgit equal')
    }
}