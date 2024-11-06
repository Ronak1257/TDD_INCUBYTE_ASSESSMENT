function num_add(numbers){
    let sum=0;
    let negative=[]
    for(let i=0;i<numbers.length;i++){
        if(numbers[i][0]==="-"){
            negative.push(numbers[i]);
        }
        else if(parseInt(numbers[i])>1000) continue;
        sum+=parseInt(numbers[i]);
    }
    if(negative.length>0){
        throw new Error("negative numbers not allowed "+negative.join(","));
    }
    return sum;
}

function add(str){
    if(str==="") return 0;
    else if(str.length==1) return parseInt(str);
    else if(str[0]==='/' && str[1]==='/'){
        let delimiter="";
        let i=3;
        if(str[2]==='['){
            while(str[i]!==']'){
                delimiter+=str[i];
                i++;
            }
        }
        else delimiter=str[2];
        str=str.substring(i+1);
        let numbers=str.split(delimiter);
        return num_add(numbers);
    }
    else{
        let numbers=str.split(/[\n,]/);
        return num_add(numbers);
    }
}

module.exports=add;