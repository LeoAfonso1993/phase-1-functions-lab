// Code your solution in this file!
function distanceFromHqInBlocks(n) {
    if (n == 42) {
        return 0
    } else if (n > 42) {
        return n - 42
    } else {
        return 42 - n
    }
}

console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))


function distanceFromHqInFeet(n1) {
    if (n1 == 42) {
        return 0
    } else if (n1 > 42) {
        return (n1 - 42) * 264
    } else {
        return (42 - n1) * 264
    }
}

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))


function distanceTravelledInFeet(n3, n4) {
    if (n3 == n4){
        return 0
    } else if (n3 > n4) {
        return (n3 - n4) * 264
    } else {
        return (n4 - n3) * 264
    }
}

console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))

function calculatesFarePrice(start, destination) {
    const dist = Math.abs(start - destination) * 264
    const fare = ((dist - 400) * 2) / 100
    if (dist < 400) {
        return 0
    } else if (dist < 2000) {
        return fare
    } else if (dist > 2000 && dist < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}

console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50,58))
console.log(calculatesFarePrice(34, 24))
