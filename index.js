// code your solution here
function wrapAdjective(result='*'){
    return function(emphatic="special"){
        return `You are ${result} ${emphatic}`
    }
}
wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer");
