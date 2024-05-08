var canConstruct = function(ransomNote, magazine) {
    for (let i=0;i<String(ransomNote).length;i++){
        if(! String(magazine).includes(String(ransomNote).charAt(i))){
            return false;
        }
    }
    return true;
};

console.log(canConstruct('abc','ffsaklsbdfc'));