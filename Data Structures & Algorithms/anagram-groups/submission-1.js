class Solution {
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0 ; i < strs.length ; i++){
            let frequency = new Array(26).fill(0);
            let word = strs[i];

            for (let j = 0 ; j < word.length ; j++){
                let value = word.charCodeAt(j) - 97;
                frequency[value]++;
            }

            let key = frequency.join("#");

            if(map.has(key)){
                map.get(key).push(word);
            }
            else {
                map.set(key , [word])
            }
        } return [...map.values()]
    }
}
