function add(str){
    if(str===""){
        return 0;
    }
    else if(str.length==1){
        return parseInt(str);
    }
    else if(str[0]==='/' && str[1]==='/'){
        let delimiter=str[2];
        str=str.substring(4);
        let numbers=str.split(delimiter);
        let sum=0;
        let negative=[]
        for(let i=0;i<numbers.length;i++){
            if(numbers[i][0]==="-"){
                negative.push(numbers[i]);
            }
            sum+=parseInt(numbers[i]);
        }
        if(negative.length>0){
            throw new Error("negative numbers not allowed "+negative.join(","));
        }
        return sum;
    }
    else{
        let sum=0;
        let arr=str.split(/[\n,]/);
        let negative=[]
        for(let i=0;i<arr.length;i++){
            if(arr[i][0]==="-"){
                negative.push(arr[i]);
            }
            sum+=parseInt(arr[i]);
        }
        if(negative.length>0){
            throw new Error("negative numbers not allowed "+negative.join(","));
        }
        return sum;
    }
}

module.exports=add;