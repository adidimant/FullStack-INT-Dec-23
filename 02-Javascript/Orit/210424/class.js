function ex1() {
    const str = '   My name is    Orit     ';
    const splitStr = str.trim().split(' ');
    //const splitStr = trimmedStr;
    splitStr.forEach(item => {
        if (item == '') {
            splitStr.splice(splitStr.indexOf(item), 1)
        }
    });
    
    console.log(splitStr);
    console.log(str);

    let lastElement = splitStr[splitStr.length - 1].length;
    console.log(lastElement);
}

function ex2() {
    const ransomNote = 'aa';
    const magazine = 'aab';
    let ransomNoteVar = ransomNote;
    let helper = '';

    /*let ransomNoteArray = ransomNote.split('');
    let magazineArray = magazine.split('');

    for (let i = 0; i < magazineArray.length; i=++;) {
        array.forEach(element => {
            
        });
        if (magazine[i] == ) 
    }
    console.log(ransomNoteArray);*/

    for (let i = 0; i < magazine.length; i++) {
        for (let a = 0; a < ransomNote.length; a++) {
            helper = ransomNoteVar.charAt(a);
            console.log(magazine.charAt(i));
            console.log(ransomNoteVar.charAt(a));
            
            if (magazine.charAt(i) == ransomNoteVar.charAt(a)) {
                ransomNoteVar.replace(helper , '1');
                console.log(ransomNoteVar);
            }
            
        }
        
    }

}