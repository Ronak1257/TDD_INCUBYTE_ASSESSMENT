function add(str){
    if(str===""){
        return 0;
    }
    else if(str.length==1){
        return parseInt(str);
    }
    else{
        str=str.split(",");
        return parseInt(str[0])+parseInt(str[1]);
    }
}

module.exports=add;