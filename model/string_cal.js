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
        for(let i=0;i<numbers.length;i++){
            sum+=parseInt(numbers[i]);
        }
        return sum;
    }
    else{
        let sum=0;
        let arr=str.split(/[\n,]/);
        for(let i=0;i<arr.length;i++){
            sum+=parseInt(arr[i]);
        }
        return sum;
    }
}

module.exports=add;