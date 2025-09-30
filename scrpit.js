const przycisk_losoj = document.querySelector('#losoj');
const wynik_losowania = document.querySelector('#wynik');



Nazwiska = ["Gorzelak","Kardacz","Barczyński","Kubacki","Bączek","Marcisz","Sojko"];
Nazwiska.forEach(element => {
    console.log(element);
});
Pomocnicza_lista_znazwiska = Nazwiska

function losowanie(){
    if(Pomocnicza_lista_znazwiska.length == 0){
        Pomocnicza_lista_znazwiska = Nazwiska
    }
    console.log('wylosowano');
    let wynik = Math.floor(Math.random()*(Pomocnicza_lista_znazwiska.length));
    wylosowana_osoba = Pomocnicza_lista_znazwiska[wynik];
    Pomocnicza_lista_znazwiska = Pomocnicza_lista_znazwiska.filter((word) => word != Pomocnicza_lista_znazwiska[wynik])
    console.log(Pomocnicza_lista_znazwiska)
    return wylosowana_osoba;
};
function wstaw_wylosowane(){
    wartosc = losowanie();
    wynik_losowania.innerHTML = wartosc;
}
przycisk_losoj.addEventListener('click', wstaw_wylosowane)


