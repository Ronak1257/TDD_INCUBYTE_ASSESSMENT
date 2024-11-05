function add(str){
    if(str===""){
        return 0;
    }
    else if(str.length==1){
        return parseInt(str);
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