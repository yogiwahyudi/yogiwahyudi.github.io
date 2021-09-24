const textField = document.getElementById('text');
const wordCount = document.getElementById('wordCount')
const character = document.getElementById('charactersCount')
const vowelsCount = document.getElementById('vowel')
const consonantsCount = document.getElementById('consonants')

function countWord(){
    let text = textField.value;
    text = text.trim();
    const words = text.split(" ");
    wordCount.innerHTML = words.length;
    character.innerHTML = text.length;

    let vowels = ['a','i','u','e','o']
    let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    let counterVowels = 0
    let counterConsonants = 0
    let temp
    for(let j=0; j<words.length;j++){
        temp = words[j]
        for(let i=0; i<temp.length;i++){
            for(let k=0; k<vowels.length;k++){
                if(temp[i] === vowels[k]){
                    counterVowels++
                }
            }
            for(let n=0; n<consonants.length;n++){
                if(temp[i] === consonants[n]){
                    counterConsonants++
                }
            }
        }
    }
    vowelsCount.innerHTML=counterVowels
    consonantsCount.innerHTML = counterConsonants
}
    
    

