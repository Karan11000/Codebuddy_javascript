function sumOfFibonacci(n){
    if(n<=0){
        return 0;
    }
    let ans = 0;
    let fibo = new Array(n+1);
    fibo[0] = 0;
    fibo[1] = 1;
    ans+=(fibo[0] + fibo[1]);
    for(let i = 2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        ans+=fibo[i];
    }
    return ans;
}

let value = sumOfFibonacci(15);
console.log(value);