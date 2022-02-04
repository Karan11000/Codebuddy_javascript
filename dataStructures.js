// 1st one 

function removeEven(v){
    let ans = v.filter((value)=>{return value%2!=0;})
    return ans;
}

// let value = removeEven([1,3,4,6,7,8, 9, 10]);
// console.log(value);

// 2nd one

function capiatlizeVowels(s){
    let ans = "";
    for(let i = 0; i<s.length; i++){
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
            ans += s.charAt(i).toUpperCase();
            continue;
        }
        ans+=s[i];
    }
    return ans;
}

// let value1 = capiatlizeVowels('Elieovtu')
// console.log(value1);

// 3rd one

function maxValue(v){
    let ans = Number.MIN_SAFE_INTEGER;
    for(let value of v){
        if(ans<value){
            ans = value;
        }
    }
    return ans;
}

// let value = maxValue([1, 3, 4, 6, 7, 8, 2, 5, 10, 150000]);
// console.log(value);