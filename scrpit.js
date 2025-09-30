const przycisk_losoj = document.querySelector('#losoj');
const wynik_losowania = document.querySelector('#wynik');
const pierwotna = document.querySelector('#pierwotna');
const aktualna = document.querySelector('#aktualna');
const wylosowane_osoby = document.querySelector('#wylosowani');

Nazwiska = ["Gorzelak","Kardacz","Barczyński","Kubacki","Bączek","Marcisz","Sojko"];
pierwotna.innerHTML = Nazwiska
Nazwiska.forEach(element => {
    console.log(element);
});
Pomocnicza_lista_znazwiska = Nazwiska
wylosowani_ludzie = [];
function losowanie(){
    
    console.log('wylosowano');
    let wynik = Math.floor(Math.random()*(Pomocnicza_lista_znazwiska.length));
    wylosowana_osoba = Pomocnicza_lista_znazwiska[wynik];
    Pomocnicza_lista_znazwiska = Pomocnicza_lista_znazwiska.filter((word) => word != Pomocnicza_lista_znazwiska[wynik]);
    if(Pomocnicza_lista_znazwiska.length == 0){
        Pomocnicza_lista_znazwiska = Nazwiska;
    }
    console.log(Pomocnicza_lista_znazwiska);
    wylosowani_ludzie.push(wylosowana_osoba);
    return wylosowana_osoba;
};
function wstaw_wylosowane(){
    wartosc = losowanie();
    wynik_losowania.innerHTML = wartosc;
    aktualna.innerHTML = Pomocnicza_lista_znazwiska;
    wylosowane_osoby.innerHTML = '';
    let i =0;
    wylosowani_ludzie.forEach((element) => {
        i++;
        wylosowane_osoby.innerHTML += `${i}) ${element}<br>`;

    });
    if(i == Nazwiska.length){
        i =1;
        wylosowani_ludzie = [];
        wylosowane_osoby.innerHTML = `${i}) ${element}<br>`;
    };
    wylosowane_osoby.innerHTML += ``
}
przycisk_losoj.addEventListener('click', wstaw_wylosowane)


