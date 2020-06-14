var tracklist = [];


function getchoice(position,song){

    tracklist[position] = song ;
    document.getElementById(returnid(position)).innerHTML = song;


}

function returnid(n){

    if (n==0){
        return ("track1");
    }
    if (n==1){
        return ("track2");
    }
    if (n==2){
        return ("track3");
    }
    if (n==3){
        return ("track4");
    }
    if (n==4){
        return ("track5");
    }
    if (n==5){
        return ("track6");
    }
    if (n==6){
        return ("track7");
    }
    if (n==7){
        return ("track8");
    }
    if (n==8){
        return ("track9");
    }
    if (n==9){
        return ("track10");
    }
    if (n==10){
        return ("track11");
    }
    if (n==11){
        return ("track12");
    }
    if (n==12){
        return ("track13");
    }
    if (n==13){
        return ("track14");
    }
    if (n==14){
        return ("track15");
    }
    if (n==15){
        return ("track16");
    }
}




function showresults(){

    if (tracklist.length == 16){
        var qlf = 0;
        var lmc = 0;
        var dll = 0;
        var df = 0;

        console.log(qlf);

        var qlf = 0;
        var lmc = 0;
        var dll = 0;
        var df = 0;

        qlf = calculateqlf();
        lmc = calculatelmc();
        dll = calculatedll();
        df = calculatedf();

        qlfp = (100*qlf)/16 ;
        lmcp = (100*lmc)/16 ;
        dllp = (100*dll)/16 ;
        dfp = (100*df)/16 ;

        document.getElementById("p0").innerHTML = "Percentage of every album :" ;

        document.getElementById("p1").innerHTML = "QLF :" ;
        document.getElementById("qlf").innerHTML = qlfp ;
        document.getElementById("p2").innerHTML = "LMC :" ;
        document.getElementById("lmc").innerHTML = lmcp ;
        document.getElementById("p3").innerHTML = "DLL :" ;
        document.getElementById("dll").innerHTML = dllp ;
        document.getElementById("p4").innerHTML = "DF :" ;
        document.getElementById("df").innerHTML = dfp ;
    } else {

        document.getElementById("p0").innerHTML = "Please choose 16 songs." ;

    }






}

function calculateqlf(){

    console.log("prout");

    var count = 0;

    if (tracklist[0] == "Je vis je visser"){
        count++;
    }
    if (tracklist[1] == "Lala"){
        count++;
    }
    if (tracklist[2] == "Différents"){
        count++;
    }
    if (tracklist[3] == "Obligés de prendre"){
        count++;
    }
    if (tracklist[4] == "De la fenêtre au ter ter"){
        count++;
    }
    if (tracklist[5] == "PNL"){
        count++;
    }
    if (tracklist[6] == "J'comprends pas"){
        count++;
    }
    if (tracklist[7] == "Gala gala"){
        count++;
    }
    if (tracklist[8] == "La petite voix"){
        count++;
    }
    if (tracklist[9] == "Athéna"){
        count++;
    }
    if (tracklist[10] == "Recherche du bonheur"){
        count++;
    }
    if (tracklist[11] == "Simba"){
        count++;
    }

    return count ;

}

function calculatelmc(){

    console.log("prout");

    var count = 0;

    if (tracklist[0] == "Le monde ou rien"){
        count++;
    }
    if (tracklist[1] == "Sur Paname"){
        count++;
    }
    if (tracklist[2] == "Oh lala"){
        count++;
    }
    if (tracklist[3] == "J'vends"){
        count++;
    }
    if (tracklist[4] == "Abonné"){
        count++;
    }
    if (tracklist[5] == "J'suis PNL"){
        count++;
    }
    if (tracklist[6] == "Mexico"){
        count++;
    }
    if (tracklist[7] == "Porte de Mesrine"){
        count++;
    }
    if (tracklist[8] == "Dans ta rue"){
        count++;
    }
    if (tracklist[9] == "Laisse"){
        count++;
    }
    if (tracklist[10] == "Loin des hommes"){
        count++;
    }
    if (tracklist[11] == "Le M"){
        count++;
    }
    if (tracklist[12] == "Rebenga"){
        count++;
    }
    if (tracklist[13] == "Plus Tony que Sosa"){
        count++;
    }
    if (tracklist[14] == "Que la mif"){
        count++;
    }
    if (tracklist[15] == "Tempête"){
        count++;
    }

    return count ;

}

function calculatedll(){

    console.log("prout");

    var count = 0;

    if (tracklist[0] == "DA"){
        count++;
    }
    if (tracklist[1] == "Naha"){
        count++;
    }
    if (tracklist[2] == "Dans la légende"){
        count++;
    }
    if (tracklist[3] == "Mira"){
        count++;
    }
    if (tracklist[4] == "J'suis QLF"){
        count++;
    }
    if (tracklist[5] == "La vie est belle"){
        count++;
    }
    if (tracklist[6] == "Kratos"){
        count++;
    }
    if (tracklist[7] == "Luz de Luna"){
        count++;
    }
    if (tracklist[8] == "Tu sais pas"){
        count++;
    }
    if (tracklist[9] == "Sheita"){
        count++;
    }
    if (tracklist[10] == "Humain"){
        count++;
    }
    if (tracklist[11] == "Bambina"){
        count++;
    }
    if (tracklist[12] == "Bené"){
        count++;
    }
    if (tracklist[13] == "Uranus"){
        count++;
    }
    if (tracklist[14] == "Onizuka"){
        count++;
    }
    if (tracklist[15] == "Jusqu'au dernier gramme"){
        count++;
    }

    return count ;

}

function calculatedf(){

    console.log("prout");

    var count = 0;

    if (tracklist[0] == "Au dd"){
        count++;
    }
    if (tracklist[1] == "Autre monde"){
        count++;
    }
    if (tracklist[2] == "Chang"){
        count++;
    }
    if (tracklist[3] == "Blanka"){
        count++;
    }
    if (tracklist[4] == "91's"){
        count++;
    }
    if (tracklist[5] == "A l'ammoniaque"){
        count++;
    }
    if (tracklist[6] == "Celsius"){
        count++;
    }
    if (tracklist[7] == "Deux Frères"){
        count++;
    }
    if (tracklist[8] == "Hasta la vista"){
        count++;
    }
    if (tracklist[9] == "Coeurs"){
        count++;
    }
    if (tracklist[10] == "Shenmue"){
        count++;
    }
    if (tracklist[11] == "Kuta Ubud"){
        count++;
    }
    if (tracklist[12] == "Menace"){
        count++;
    }
    if (tracklist[13] == "Zoulou Tchaing"){
        count++;
    }
    if (tracklist[14] == "Déconnecté"){
        count++;
    }
    if (tracklist[15] == "La misère est si belle"){
        count++;
    }

    return count ;

}