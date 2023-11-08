var datos = ["Caja: ","Bancos: ","Clientes: ","Deudores: ","Almacen: ","Terreno: ","Edificio: ",
                        "Maquinaria y equipo: " ,"Mobiliaria y equipo: ","Equipo de computo: ", "Equipo de Transporte: ",
                        "Gastos de Organizacion: ","Gasto de transicion","Seguros pagados por anticipacion: ",
                        "Propaganda y publicidad: ","Papeleria y Articulos de oficina: ","Acredores: ","Provedores: ",
                        "Documentos por pagar: ","Impuestos pagados: ","Acredor hipotecario: ","Capital Social: ","Utilidad del ejersicio"];

var inpRecoDatos = document.getElementById("recoDatos");
var recoleccionDatos = [];



const cambioDeInformacion = (i) =>
{
        
        inpRecoDatos.placeholder = datos[i];
        inpRecoDatos.value= "";
        
}



export { recoleccionDatos, cambioDeInformacion, datos };