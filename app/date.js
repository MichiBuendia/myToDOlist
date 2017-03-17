function digitalclock(){
var data =new Date()
mese = data.getMonth();
giorno =data.getDay();
anno = data.getFullYear();
date = data.getDate();
ora = data.getHours();
minuti=data.getMinutes();
secondi=data.getSeconds();

if(giorno == 0)giorno = "Domenica";
if(giorno == 1)giorno = "Lunedi";
if(giorno == 2)giorno = "Martedi";
if(giorno == 3)giorno = "Mercoledi";
if(giorno == 4)giorno = "Giovedi";
if(giorno == 5)giorno = "Venerdi";
if(giorno == 6)giorno = "Sabato";
if(mese == 0)mese = "Gennaio";
if(mese ==1)mese = "Febbraio";
if(mese ==2)mese = "Marzo";
if(mese ==3)mese = "Aprile";
if(mese ==4)mese = "Maggio";
if(mese ==5)mese = "Giugno";
if(mese ==6)mese = "Luglio";
if(mese ==7)mese = "Agosto";
if(mese ==8)mese = "Settembre";
if(mese ==9)mese = "Ottobre";
if(mese ==10)mese = "Novembre";
if(mese ==11)mese = "Dicembre";
if (date < 10)date="0"+date;
if (ora < 10)ora="0"+ora;
if (minuti < 10)minuti="0"+minuti;
if (secondi < 10)secondi="0"+secondi;
data=giorno+" "+date+" "+mese+" "+anno+" - ore "+ora+":"+minuti+":"+secondi
document.getElementById("demo").innerHTML=data;
}
setInterval("digitalclock()",1000)
