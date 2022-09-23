const letterFrequency = (phrase) => {

    let counter = []
    
    for (const letter of phrase) {

        let newL = true;
        for (let item in counter){
            if (counter[item].char == letter){
                newL = false;
                counter[item].times++;

            }
        }

        if (newL == true) {
            let newLetter = {
                char: letter,
                times: 1
            }
            counter.push(newLetter)
        }        
    }
    return counter    
}

let phrase = 'Hello world';
console.log(letterFrequency(phrase));



