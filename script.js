
do{
    var ch =+prompt('Введите число')
}while (isNaN(ch) || ch == 0) ;
    

do{
    var st =+prompt('Введите степень')
}while (isNaN(st) || st == 0) ;
    
let end = 1
for (let i = 0; i < st ; i++) {
   end = end * ch
    
}
console.log(end);



do{
    var n =+prompt('Введите число')
}while (isNaN(n) || n <= 0) ;
    
do{
    var sum =+prompt('Введите символ')
}while (sum == '') ;
    
do{
    var lam =+prompt('Введите конечный символ')
}while (lam == '') ;
    
for (let i = 0; i < n ; i++) {
      lam = i == 0 ? lam : sum + lam
  console.log(lam);
    }
// 'ваше имя' + num + 'вам'+ l + 'лет')
    function random () {
        return Math.floor(Math.random() *(15+1), (15-1))

        
    }
    let ans = +prompt ('Введите количество примеров')
    for (let i = 0; i < ans ; i++) {
    let num1 =random()
    let num2 =random()
    let wer = +prompt(num1 + '+'+num2+ '=?')
    let trues = num1 + num2
        console.log(wer == trues ? 'Ваш ответ верный: ' + trues : 'Ваш ответ неверный:' + wer  + ' Правильный ответ:' + trues);
    }
    let num =prompt('введите своё имя')
    let year=+prompt('введите нынешний год')
    let old=+prompt('введите свой год рождения')
    function nam( ) {
  
        return nam;
        
    }
    console.log(nam());