/**
 * @param {number} n
 * @return {number}
 */
const MOD = BigInt(1000000007);
var countGoodNumbers = function(n) {
    function fastExp(n,x){
        if(n == 0)
            return BigInt(1);
        const temp = fastExp(parseInt(n/2),x) % MOD;
        if(n % 2 == 0)
            return temp * temp;
        else
            return x * temp * temp;
    }

    if(n % 2 == 0)
        return (fastExp(parseInt(n/2),BigInt(5)) * fastExp(parseInt(n/2),BigInt(4))) % MOD;
    else
        return (BigInt(5) * fastExp(parseInt(n/2),BigInt(5)) * fastExp(parseInt(n/2),BigInt(4))) % MOD;
};