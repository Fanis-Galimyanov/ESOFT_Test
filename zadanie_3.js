const start = document.getElementById('start');
skobrki = ['(',')','{','}','[',']'];

let vvedni_tolko_skobki = true;

start.onclick = function() {
    posledovatelnost = document.getElementById('posledovatelnost').value;

    let array_posledovatelnost = posledovatelnost.split('');

        for (const element_posledovatelnosty of array_posledovatelnost){
            if(!skobrki.includes(element_posledovatelnosty)){
                vvedni_tolko_skobki = false;
                alert('В введеной последовательности есть НЕ скобка!!!');
                break;
            }
        
        }
        
    
    alert(vvedni_tolko_skobki);
    



  };


/*String = '{}()[';

let stek = [];
stek.push('{');
stek.push('[');
stek.push(']');
stek.push('}');

console.log(stek);
console.log(stek.pop());
console.log(stek.pop());
console.log(stek);*/