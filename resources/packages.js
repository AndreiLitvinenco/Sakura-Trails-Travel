//alert("Sunt un mesaj enervant. Oare cum poti sa scapi de mine?")


/*
comentariu 
pe mai multe
randuri*/

textButon=null;
butonApasat=false;

function f(){
    ceva=1000
    var i=0;
    while ( i<=10){
        // if (i%2==0)
            console.log(i)
        i+=2
    }
    console.log("in afara for-ului "+i)
    return 2000;
}

/*(creare, inserare inainte de element) 
La încărcarea documentului, se va insera la 
începutul elementului body, un paragraf care conține data și ora curentă.
*/

function adauga_0(x){
    if (x<10) return "0"+x;
    else return x;
}



window.onload= function(){
    //creez un paragraf in variabila pgf
    var pgf=document.createElement("p");
    //in interiorul(continutul) paragrafului pun data curenta
    var d =new Date();
    // var luna=d.getMonth();
    // var zi=d.getDate();
    // var an=d.getFullYear();

    //zi(nume_zi) nume_luna an [hh:mm:ss]
    //   <p>data curenta</p>
    v_zile=["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"] 
    v_luni=["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"]
    pgf.innerHTML=`Litvinenco Andrei Alexandru 202 - ${d.getDate()}(${v_zile[d.getDay()]}) ${v_luni[d.getMonth()]} ${d.getFullYear()} [${adauga_0(d.getHours())}:${adauga_0(d.getMinutes())}:${adauga_0(d.getSeconds())}]`; 
    //in body, inainte de primul sau fiu(element) adaugam paragraful din variabila pgf
    document.body.insertBefore(pgf,document.body.firstElementChild)

}

function afiseazadata() {
    const now = new Date();
    const an = now.getFullYear();
    const numeLuna = v_luni[now.getMonth()];
    const numeZi = v_zile[now.getDay()];
    const zi = now.getDate().toString().padStart(2, '0');

    const dataCurenta = an + ', ' + numeLuna + ' ' + numeZi + ':' + zi;

    alert(dataCurenta);
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function completeazaCelule() {
    const tabel = document.getElementById('tabel');
    const celule = tabel.getElementsByTagName('td');

    for (let i = 0; i < celule.length; i++) {
        const valoareCelula = parseInt(celule[i].textContent);

        if (isNaN(valoareCelula) || valoareCelula === 0) {
            // Completează cu o valoare aleatoare între 1 și 100
            celule[i].textContent = getRandomValue(1, 100);
        }
    }
}
window.addEventListener('load', completeazaCelule);


// function marcheazaRanduri() {
//     const tabel = document.getElementById('tabel');
//     const randuri1 = tabel.getElementsByTagName('tr');
// 
//     for (let i = 0; i < randuri.length; i++) {
//         const celule = randuri1[i].getElementsByTagName('td');
//         
//         if (celule.length > 0 && parseInt(celule[0].textContent) > 1) {
//             randuri[i].classList.add('marcat');
//         }
//     }
// }

function numaraRanduri() {
    const tbody = document.querySelector('#tabel tbody');
    const numarRanduri = tbody.getElementsByTagName('tr').length;

    alert(`Numărul de rânduri din tabel: ${numarRanduri}`);
}
