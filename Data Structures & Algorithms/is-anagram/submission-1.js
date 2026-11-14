class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let frequency =  new Array(26).fill(0);

        for(let i = 0 ; i < s.length ; i++){
            let index = s.charCodeAt(i) - 97;
            frequency[index]++;
            let character = t.charCodeAt(i) - 97;
            frequency[character]--;
        }

        for(let j = 0 ; j < frequency.length ; j++){
            if(frequency[j] !== 0){
                return false;
            }
        } return true;
    }
}
