// https://github.com/patwarymehedi/Assignment-3


// first problem solution:

function kilometerToMeter(kilometer){
    let meter = kilometer * 1000 ;
    // bonus part
    if(meter >= 0){
        return meter;
    }
    else{
        return "Error : distance cannot be negative"
    } 
}


const result1 = kilometerToMeter(1);
const result2 = kilometerToMeter(-1);
console.log(result1,result2);




// second problem solution:

function budgetCalculator(watch,phone,laptop){
    let budget = 50 * watch + 100 * phone + 500 * laptop;
    return budget;
}


let totalBudget = budgetCalculator(5,3,1);
console.log(totalBudget);





// third problem solution:

function hotelCost(days){
    let cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        let firstTenDays = 10 *100;
        let remainingDays = days - 10;
        let secondTenDays = remainingDays * 80 ;
        cost = firstTenDays + secondTenDays;
    }
    else{
        let firstTenDays = 10 *100;
        let secondTenDays = 10 *80;
        let remainingDays = days - 20;
        let afterFirstTwentydays = remainingDays * 50;
        cost = firstTenDays + secondTenDays + afterFirstTwentydays;
    }
    return cost;
}


let hotelStayCost = hotelCost(23);
console.log(hotelStayCost);





// fourth problem solution:

function megaFriend(arr){
    let mega = 0;
    let megaFriendName;
    for (i=0; i<arr.length; i++){
        if (arr[i].length > mega){
          mega = arr[i].length;
          megaFriendName = arr[i];
        }
    }
    return megaFriendName;
} 


let answer = megaFriend(['Mehedi','jahid','foysal','Mukidul','Anik','Jhankar Mahbub']);
console.log(answer);