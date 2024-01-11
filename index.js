function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function sumValue(){
        
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}