let arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5, 5,2 ,2, 2, 2];

let hash = new Map();
for (let i=0;i<arr.length;i++)
    {
        if(hash.get(arr[i]) == undefined)
            {
                hash.set(arr[i],1);
            }
            else{
                 hash.set(arr[i], hash.get(arr[i])+1);
                
            }
    }
    let a= 0;
    let val = 0;
    hash.forEach((value,key)=>{
        if(a<=value) 
            {
                if(val < key)
                    {
                        val = key;
                    }
                
                a = value;

            }
         

    })
    console.log(hash);
    console.log(val);