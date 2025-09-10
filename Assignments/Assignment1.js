function add(a, b) {
    if(a === undefined){
        a = 0
    }
    if(b === undefined){
        b = 0;
    }
    return a + b
}

console.log("Add: ", add(5));

function subtract(a = 0, b = 0) {
    return a - b;
}

console.log("Subtract: ", subtract(10));

function multiply() {
    var result = 1;
    for(var i = 0; i < arguments.length; i++) {
        result = result * arguments[i];
    }
    return result;
}

console.log("Multiply: ", multiply(2,3,4));

function divide() {
    if(arguments.length === 0){
        return "No numbers"
    }
    var res = arguments[0];
    for(var i = 1; i < arguments.length; i++){
        res = res / arguments[i];
    }
    return res;
}

console.log("Divide: ", divide(100, 2, 5));
function SolveThis(obj){
    var res = {}
    for(var key in obj){
        var val = obj[key]
        
        if(key == "sum"){
            var s = 0
            for(var i=0;i<val.length;i++){
                s = s + val[i]
            }
            res[key] = s
        }

        else if(key == "max"){
            var m = val[0]
            for(var i=1;i<val.length;i++){
                if(val[i] > m){
                    m = val[i]
                }
            }
            res[key] = m
        }

        else if(key == "min"){
            var mi = val[0]
            for(var i=1;i<val.length;i++){
                if(val[i] < mi){
                    mi = val[i]
                }
            }
            res[key] = mi
        }

        else if(key == "round"){
            var newArr = []
            for(var i=0;i<val.length;i++){
                newArr.push(Math.round(val[i]))
            }
            res[key] = newArr
        }

        else if(key == "abs"){
            var absArr = []
            for(var i=0;i<val.length;i++){
                absArr.push(Math.abs(val[i]))
            }
            res[key] = absArr
        }

        else if(key == "ceil"){
            var ceilArr = []
            for(var i=0;i<val.length;i++){
                ceilArr.push(Math.ceil(val[i]))
            }
            res[key] = ceilArr
        }

        else if(key == "floor"){
            var floorArr = []
            for(var i=0;i<val.length;i++){
                floorArr.push(Math.floor(val[i]))
            }
            res[key] = floorArr
        }

        else if(key == "random"){
            var randArr = []
            for(var i=0;i<val.length;i++){
                randArr.push(Math.random())
            }
            res[key] = randArr
        }

        else{
            res[key] = "not valid"
        }
    }

    return res
}

var result = SolveThis({
    sum: [3,2,4],
    max: [2,4,3,5],
    min: [5,3,4,3],
    round: [2.3, 4.6],
    abs: [-2, -5, 3],
    ceil: [1.2, 3.7],
    floor: [4.9, 2.1],
    random: [1,1,1]
})

console.log(result)
