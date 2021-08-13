const hq = 42;
const feet = 264;

const distanceFromHqInBlocks = function(distance){
    if (distance >= 43){
        return distance - hq;
    }
    else if (distance <= 42){
        return hq - distance;
    }
}
function distanceFromHqInFeet(distance){
 return distanceFromHqInBlocks (distance) * feet;
}

function distanceTravelledInFeet(distance,hq){
    if (distance > hq){
        return (distance -  hq) * feet;
    }
    else 
        return (hq - distance) * feet;
}

function calculatesFarePrice(distance,hq){
    let fare = distanceTravelledInFeet(distance,hq)
    if (fare <= 400){
        return 0;
    }
    else if(fare < 2000){
        return (fare - 400) * .02;
    }
    else if (fare > 2000 && fare <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }    
}
       