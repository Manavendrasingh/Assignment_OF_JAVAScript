const str = "manav";

String.prototype.substring = function(){
    let substr = [];
    for(let m =0;m<str.length;m++)
        {
            for(let n = m +1;n<str.length + 1;n++)
                {
                    substr.push(str.slice(m,n));
                }
        }

        return substr;

}
console.log(str.substring());
console.log(str.substring().length);