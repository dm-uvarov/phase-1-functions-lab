// Code your solution in this file!
function distanceFromHqInBlocks(dist){
    return Math.abs(dist-42);
}//end of distanceFromHqInBlocks

function distanceFromHqInFeet(dist){
    return Math.round(Math.abs(264*(dist-42)));
}//end of function distanceFromHqInFeet(dist)

function calculatesFarePrice(startpoint,endpoint){
    let dist = Math.round(Math.abs(264*(endpoint - startpoint)));
    if (dist < 400) {
        return 0;
    } else if (dist < 2000){
        return (dist-400)*0.02;
    } else if (dist < 2500 ){
        return 25;
    } else {
        return "cannot travel that far"
    }
    
}// end of function calculatesFarePrice(startpoint,endpoint)

function distanceTravelledInFeet(startpoint,endpoint){
    return Math.round(Math.abs(264*(endpoint - startpoint)));
}