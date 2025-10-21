const wydarzeniaSzkolne = [
	{
		id: 'a1f3e6c2-9b4d-4d7f-8a1e-1c3f9d2a7e01',
		data: '2025-09-01',
		wydarzenie: 'Rozpoczęcie roku szkolnego',
		typ: 'rozpoczęcie',
	},
	{
		id: 'b2d7a9e3-5c8f-4a2b-9d3f-2e6a1c4b8f02',
		data: '2025-10-14',
		wydarzenie: 'Dzień Edukacji Narodowej',
		typ: 'święto',
	},
	{
		id: 'c3e8b1f4-7d9a-4e3c-8b2f-3f7b2d5c9g03',
		data: '2025-11-10',
		wydarzenie: 'Dzień wolny od z.d.',
		typ: 'wolne',
	},
	{
		id: 'a2e8e1f4-ed3a-4d3c-ab3f-d27b2d5c9a61',
		data: '2025-11-11',
		wydarzenie: 'Narodowe Święto Niepodległości',
		typ: 'wolne',
	},
	{
		id: 'd4f9c2g5-8e1b-4f4d-9c3g-4g8c3e6d0h04',
		data: '2025-12-22',
		wydarzenie: 'Zimowa przerwa świąteczna',
		typ: 'ferie',
	},
	{
		id: 'e5g1d3h6-9f2c-4g5e-0d4h-5h9d4f7e1i05',
		data: '2026-01-01',
		wydarzenie: 'Nowy Rok',
		typ: 'święto',
	},
	{
		id: 'f6h2e4i7-0g3d-5h6f-1e5i-6i0e5g8f2j06',
		data: '2026-01-06',
		wydarzenie: 'Trzech Króli',
		typ: 'święto',
	},
	{
		id: 'v2y8u3z4-6w9t-1x2v-7u1y-2y6u1w4v9z22',
		data: '2026-01-09',
		wydarzenie: 'Egzamin zawodowy pisemny',
		typ: 'egzamin',
	},
	{
		id: 'i9k5h7l0-3j6g-8k9i-4h8l-9l3h8j1i5m09',
		data: '2026-02-16',
		wydarzenie: 'Ferie zimowe',
		typ: 'ferie',
	},
	{
		id: 'k1m7j9n2-5l8i-0m1k-6j0n-1n5j0l3k7o11',
		data: '2026-04-02',
		wydarzenie: 'Wiosenna przerwa świąteczna',
		typ: 'ferie',
	},
	{
		id: 'n4p0m2q5-8o1l-3p4n-9m3q-4q8m3o6n0r14',
		data: '2026-05-05',
		wydarzenie: 'Matura z j. polskiego',
		typ: 'egzamin',
	},
	{
		id: 'o5q1n3r6-9p2m-4q5o-0n4r-5r9n4p7o1s15',
		data: '2026-05-06',
		wydarzenie: 'Matura z matematyki',
		typ: 'egzamin',
	},
	{
		id: 'p6r2o4s7-0q3n-5r6p-1o5s-6s0o5q8p2t16',
		data: '2026-05-07',
		wydarzenie: 'Matura z j. obcego',
		typ: 'egzamin',
	},
	{
		id: 'q7s3p5t8-1r4o-6s7q-2p6t-7t1p6r9q3u17',
		data: '2026-05-08',
		wydarzenie: 'Egzamin zawodowy pisemny',
		typ: 'egzamin',
	},
	{
		id: 's9u5r7v0-3t6q-8u9s-4r8v-9v3r8t1s5w19',
		data: '2026-06-26',
		wydarzenie: 'Zakończenie zajęć dydaktycznych',
		typ: 'zakończenie',
	},
	{
		id: 't0v6s8w1-4u7r-9v0t-5s9w-0w4s9u2t6x20',
		data: '2026-06-27',
		wydarzenie: 'Wakacje letnie',
		typ: 'ferie',
	},
];

const Button_main = document.querySelector("#oblicz");
const wynik_ostateczny = document.querySelector(".dziwny_wynik");
const twarda_data = document.querySelector("#data_wlasna");
let wybrane_wydarzenie = document.querySelector("#wydarzenia").value;
let obecne = wydarzeniaSzkolne.filter(object => object.id === wybrane_wydarzenie);
let obecny_obiekt = obecne[0];
let data_wydarzenia = new Date(obecny_obiekt.data);
let dzis = new Date();
options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
};
dzisiaj_data_wyswietl = dzis.toLocaleString("pl-PL", options);
data_wydarzenia_wyswietl = data_wydarzenia.toLocaleString("pl-PL", options)
function zmiana_daty(){
    dzis_nowe = new Date(document.querySelector("#data_wlasna").value);
    wybrane_wydarzenie = document.querySelector("#wydarzenia").value;
    obecne = wydarzeniaSzkolne.filter(object => object.id === wybrane_wydarzenie);
    obecny_obiekt = obecne[0];
    data_wydarzenia = new Date(obecny_obiekt.data);
    
    roznica = Math.round((Math.abs(dzis_nowe-data_wydarzenia))/1000/60/60/24);
    if(document.querySelector("#short").checked){
        options = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        dzisiaj_data_wyswietl = dzis_nowe.toLocaleString("pl-PL", options);
        data_wydarzenia_wyswietl = data_wydarzenia.toLocaleString("pl-PL", options)
        wynik_ostateczny.innerHTML = `między ${dzisiaj_data_wyswietl} a ${data_wydarzenia_wyswietl} jest ${roznica} dni`;
    
    }else if(document.querySelector("#long").checked){
        options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        dzisiaj_data_wyswietl = dzis_nowe.toLocaleString("pl-PL", options);
        data_wydarzenia_wyswietl = data_wydarzenia.toLocaleString("pl-PL", options)
        wynik_ostateczny.innerHTML = `między ${dzisiaj_data_wyswietl} a ${data_wydarzenia_wyswietl} jest ${roznica} dni`;
    };
};
function obliczenie_1(){
    wybrane_wydarzenie = document.querySelector("#wydarzenia").value;
    obecne = wydarzeniaSzkolne.filter(object => object.id === wybrane_wydarzenie);
    obecny_obiekt = obecne[0];
    data_wydarzenia = new Date(obecny_obiekt.data);
    
    roznica = Math.round((Math.abs(dzis-data_wydarzenia))/1000/60/60/24);
    if(document.querySelector("#short").checked){
        options = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        dzisiaj_data_wyswietl = dzis.toLocaleString("pl-PL", options);
        data_wydarzenia_wyswietl = data_wydarzenia.toLocaleString("pl-PL", options)
        wynik_ostateczny.innerHTML = `między ${dzisiaj_data_wyswietl} a ${data_wydarzenia_wyswietl} jest ${roznica} dni`;
    
    }else if(document.querySelector("#long").checked){
        options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        dzisiaj_data_wyswietl = dzis.toLocaleString("pl-PL", options);
        data_wydarzenia_wyswietl = data_wydarzenia.toLocaleString("pl-PL", options)
        wynik_ostateczny.innerHTML = `między ${dzisiaj_data_wyswietl} a ${data_wydarzenia_wyswietl} jest ${roznica} dni`;
    };
};

twarda_data.addEventListener('change',zmiana_daty)
Button_main.addEventListener('click', obliczenie_1);
