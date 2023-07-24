const foot = 0.305;
let firstInKmDistance = parseInt(prompt('Enter distance')*1000);
let secondInFootDistance = parseInt(prompt('Enter distance') * foot );

if (firstInKmDistance > secondInFootDistance){
    console.log('in km biger')
}if(firstInKmDistance < secondInFootDistance){
    console.log('in foot biger')
}