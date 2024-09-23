let MainWord;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

function shuffleString(word){
    let letters = word.split('');
    shuffle(letters);
    return letters.join('').toUpperCase();
};

function show_outupt_container(){
    const conetainerElement = document.getElementById('ouput-cotntainer');
    conetainerElement.style.display = 'flex';
};

function create_word_html(word){
    let shuffledWord = shuffleString(word);
    let wordHtml = [];
    for (let char of shuffledWord) {
        el = document.createElement('span')
        el.innerText = char
        el.classList.add('char-element')
        wordHtml.push(el.outerHTML);
    }
    return wordHtml.join('');
}

function show_mixed(word, outputWordElement){
    inner_html = create_word_html(word)
    console.log(inner_html)
    outputWordElement.innerHTML = inner_html
    };

function InputWordHandle(){
    const form = document.getElementById('input-form');
    const outputWordElement = document.getElementById('outupt-word');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let mixWord = formData.get('mixword').trim();
        MainWord = mixWord;
        console.log(mixWord);
        event.target.reset();
        form.style.display = 'none';
        show_outupt_container();
        show_mixed(mixWord, outputWordElement);
    });
};


function NextMixButtonHandle(){
    const buttonElement = document.getElementById('next-button');
    const outputWordElement = document.getElementById('outupt-word');
    buttonElement.addEventListener('click',
        (event)=>{
            show_mixed(MainWord, outputWordElement);
        });
};

document.addEventListener('DOMContentLoaded', function() {
    InputWordHandle();
    NextMixButtonHandle();
    });
    