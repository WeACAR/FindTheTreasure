function myFunction() {
    var ans =document.getElementById("name").value;
    const codes = ["atidut", "avehiw", "awosig", "emojak", "ihesog", "iticuv", "iveten", "izifac", "ohisic", "opuwuh", "oyocas", "oyunup", "ubatex", "ufizef", "ugeket", "upacok", "upikek", "uramic", "uroxey", "uwadik"]
    if(ans == "قوس قزح"){
        location.href = "answer.html";
    }else{
        document.getElementById("demo").innerHTML = "نقولي " +"'" + ans +"'" + " أجل";
    }
}