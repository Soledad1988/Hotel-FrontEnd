

function calculardiasDiscount() {
    var timeStart = new Date(document.getElementById("timeStart").value);
    var timeEnd = new Date(document.getElementById("timeEnd").value);

    if (timeEnd > timeStart)
    {
        var diff = timeEnd.getTime() - timeStart.getTime();
        var dias = Math.round(diff / (1000 * 60 * 60 * 24));
        var precioDia = 800;
        var total = Math.round(precioDia * dias);
        console.log(total);
        document.getElementById("valor").value = total;
        
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        alert("La fecha final de la promoción debe ser mayor a la fecha inicial");
        document.getElementById("valor").value = 0;
    }
}
