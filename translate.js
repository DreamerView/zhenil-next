var str = 'Растениям нужен широкий простор, родной край и свобода.';
console.log(str.split(' '));
let word = str.split(' ');
let s = ['Plants','need','a wide','expanse','native','land','and','freedom'];

for(i=0;i<word.length;i++) {
    word[i] = s[i];
}
console.log(word.join(' '));
