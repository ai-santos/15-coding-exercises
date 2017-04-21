const stringMeAlong = (str, uniqChar) => {
    //declare a counter
    const map = {};
    let start = 0;
    let maxLen = 0;
    let maxSubstring = null;

    for (let i = 0; i < str.length; i++) {
        //add each char to the counter
        let char = str.charAt(i);
        if(map[char]!=null){
            map[char] = map[char]+1;
        }else{
            map[char] = 1;
        }

        if(Object.keys(map).length == uniqChar+1){
            //get maximum
            let range = i-start;
            if(range > maxLen){
                maxLen = range;
                maxSubstring = str.substring(start, i);
            }

            //move left cursor toward right, so that substring contains only k chars
            let first = str.charAt(start);
            while(Object.keys(map).length > uniqChar){
                let count = map[first];
                if(count>1){
                    map[first] = count-1;
                }else{
                    delete map[first];
                }
                start++;
            }
        }
    }

    if (Object.keys(map).length == uniqChar && maxLen == 0) {
        return str;
    }

    return maxSubstring;
}

console.log(stringMeAlong('abcabcbb', 2))
