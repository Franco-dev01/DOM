var  arr=[];
    var first='',
    var  content=0;
    

function char(){
    var chaine=prompt('entre un chaine ')   
    
    arr=chaine;
    for(let i=0;i<arr.length;i++){
        content +=arr[i]
        
    }
console.log(content)
}
char()