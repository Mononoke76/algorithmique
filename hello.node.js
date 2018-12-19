/**
 * @name hello.node
 * @desc Juste pour les algorithmes
 * @author Aélion - dec.2018
 * @version 1.0.0
 */

/**
 * Retourne la valeur maximum entre deux valeurs
 * private int max(int currentMax, int value)
 * @param {*} currentMax 
 * @param {*} value 
 * @return number La valeur la plus élevée entre currentMin et value
 */
function max(currentMax, value) {
    //console.log( 'comparer: ' + currentMax+ ' à' + value);
    if (value > currentMax) {
        return value;
    } else {
        return currentMax;
    }
}
/**
 * retourne la valeur minimum entre deux valeurs
 * private int min( int currentMin, int value)
 * @param {*} currentMin 
 * @param {*} value 
 * @return number la valeur la plus basse entre currentMin et value
 */
function min(currentMin, value) {
    if (value < currentMin) {
        return value;
    }
    else {
        return currentMin;
    }
}
/**
 * wrapper pour les fonctions min et max
 * public int minOrMax(int current, int value, boolean wantMax= false)
 * @param {*} current 
 * @param {*} value 
 * @param {*} wantMax 
 * @return number La valeur la plus haute ou la plus basse entre current et value
 */
function minOrMax(current, value, wantMax = true) {
    if (wantMax) {
        return max(current, value);
    } else {
        return min(current, value);
    }
}
console.log('hello world from nodeJs');
// creation d'une variable de type tableau
/**
 * @var array
 * Tableau de nombres entiers
 */
const tablo = [500, 25, 50, 256, 312, 3, 22, 500];

// Boucle de parcours du tableau
for (let i = 0; i < tablo.length; i++) {
    if (tablo[i] % 2 == 0) {
        console.log('indice ' + i + ' => ' + tablo[i]);
    } else {
        console.log(tablo[i] + ' est impair');
    }

}

// boucle somme tablo

let sommeTablo = 0;
for (let i = 0; i < tablo.length; i++) {
    sommeTablo = sommeTablo + tablo[i];
}
console.log(' Total: ' + sommeTablo);

// boucle maximum tablo
let tabloMax = tablo[0];
let tabloMin = tablo[0];
for (let i = 0; i < tablo.length; i++) {
    //if (tablo[i] > tabloMax){
    //  tabloMax= tablo[i];
    if (i > 0) {
        tabloMax = minOrMax(tabloMax, tablo[i]);
        tabloMin = minOrMax(tabloMin, tablo[i], false);
    }
}

console.log('maximum : ' + tabloMax);
console.log('Minimum : ' + tabloMin);

for (let i=0; i<tablo.length; i++){
    while(tablo[i] > tablo[i + 1]){
        let valeur = tablo[i];
        tablo[i] = tablo[i + 1];
        tablo[i + 1] = valeur;
        i=i-1;
    }
}
console.log(tablo);

let nvTablo=[];
let indice=0;
tabloMin=tablo[0];
while(tablo.length>0){
    for(i=0; i<tablo.length;i++){
        if (tablo[i]<tabloMin){
            tabloMin=tablo[i];
            indice=i;
        }
    }
    nvTablo.push(tabloMin);
    tablo.splice(indice,1);
    tabloMin=99999;
}


