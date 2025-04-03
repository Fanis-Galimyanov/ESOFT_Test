const start = document.getElementById('start');
let skobrki = ['(',')','{','}','[',']'];
let skobrki_otkrivayuchie = ['(','{','['];
let skobrki_zakrivayuchie = [')','}',']'];

let vvedni_tolko_skobki = true;

start.onclick = function() {
    let posledovatelnost = document.getElementById('posledovatelnost').value;

    let array_posledovatelnost = posledovatelnost.split('');

        for (const element_posledovatelnosty of array_posledovatelnost){
            if(!skobrki.includes(element_posledovatelnosty)){
                vvedni_tolko_skobki = false;
                alert('В введеной последовательности есть НЕ скобка!!!');
                break;
            }
        
        }
        
    if(vvedni_tolko_skobki){
        let stack = [];
        let pravilnaya_skobchnaya_posledovatelnost = true;
        for(const element_posledovatelnosty of array_posledovatelnost){
            if(skobrki_otkrivayuchie.includes(element_posledovatelnosty)){
                stack.push(element_posledovatelnosty);
            }
            else if(skobrki_zakrivayuchie.includes(element_posledovatelnosty)){
                
                if(stack.length == 0){
                    pravilnaya_skobchnaya_posledovatelnost = false;
                    break;
                }
                
                let open_bracket = stack.pop();

                if(open_bracket == '(' && element_posledovatelnosty == ')'){
                    continue;
                }

                if(open_bracket == '[' && element_posledovatelnosty == ']'){
                    continue;
                }

                if(open_bracket == '{' && element_posledovatelnosty == '}'){
                    continue;
                }

                pravilnaya_skobchnaya_posledovatelnost = false;
                break;
            }

        }
        if(pravilnaya_skobchnaya_posledovatelnost && stack.length == 0){
            alert('Введена правельная скобочная последовательность!');
            }
        else{
            alert('Не правельная скобочная последовательность!!!');
        }
    }

    vvedni_tolko_skobki = true;

  };
