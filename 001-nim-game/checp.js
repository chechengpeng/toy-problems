/**
 * @param {number} n
 * @return {boolean}
 * 看见大家直接return n%4===0 的！值，觉得自己还用if else 好惭愧
 */
var canWinNim = function(n) {
    if(n%4===0){
        return false;
    }else{
        return true;
    }
};