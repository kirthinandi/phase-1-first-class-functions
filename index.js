function receivesAFunction(food) {
    food();
}

function returnsANamedFunction() {
    return function food() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}

