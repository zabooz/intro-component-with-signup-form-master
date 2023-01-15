const btn = document.querySelector('button');
const userInput = document.querySelectorAll('input');
const emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

btn.addEventListener('click', e => {
        

    document.querySelectorAll('.img').forEach(ele => ele.classList.remove('error-show'))
    document.querySelectorAll('form p').forEach(ele => ele.classList.remove('error-show'))

    for(let i = 0; i < userInput.length;i++){
        if(userInput[i].type === 'email' && !(emailRegex.test(userInput[i].value))){
            document.querySelector(`#p${i}`).classList.add('error-show')
            document.querySelector(`#error${i}`).classList.add('error-show');
        }else if(userInput[i].value === ''){
            document.querySelector(`#p${i}`).classList.add('error-show');
            document.querySelector(`#error${i}`).classList.add('error-show');
        }
    }
})
