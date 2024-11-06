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
    else if(str.startsWith("//")){
        let delimiter=[];
        let i=2;
        if(str[i]==='['){
            while(str[i]==='['){
                let end=str.indexOf("]",i);
                delimiter.push(str.substring(i+1,end));
                i=end+1;
            }
        }
        else{
            delimiter.push(str[i]);
            i++
        }
        str=str.substring(i+1);
        let delimiterRegex=new RegExp(delimiter.map(d=>d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join("|"));
        let numbers=str.split(delimiterRegex);
        return num_add(numbers);
    }
    else{
        let numbers=str.split(/[\n,]/);
        return num_add(numbers);
    }
}

module.exports=add;