function add(){
    var result=Number(document.getElementById("FN").value)+Number(document.getElementById("SN").value);
    document.getElementById("b1").value=result;
}

function subtract(){
    var result=Number(document.getElementById("FN").value)-Number(document.getElementById("SN").value);
    document.getElementById("b2").value=result;
}

function multiplication(){
    var result=Number(document.getElementById("FN").value)*Number(document.getElementById("SN").value);
    document.getElementById("b3").value=result;
}

function divition(){
    var result=Number(document.getElementById("FN").value)/Number(document.getElementById("SN").value);
    document.getElementById("b4").value=result;
}
