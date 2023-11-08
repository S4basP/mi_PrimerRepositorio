'use strict';

var datos = ["Caja: ","Bancos: ","Clientes: ","Deudores: ","Almacen: ","Terreno: ","Edificio: ",
                        "Maquinaria y equipo: " ,"Mobiliaria y equipo: ","Equipo de computo: ", "Equipo de Transporte: ",
                        "Gastos de Organizacion: ","Gasto de transicion","Seguros pagados por anticipacion: ",
                        "Propaganda y publicidad: ","Papeleria y Articulos de oficina: ","Acredores: ","Provedores: ",
                        "Documentos por pagar: ","Impuestos pagados: ","Acredor hipotecario: ","Capital Social: ","Utilidad del ejersicio"];

var inpRecoDatos$1 = document.getElementById("recoDatos");
var recoleccionDatos = [];



const cambioDeInformacion = (i) =>
{
        
        inpRecoDatos$1.placeholder = datos[i];
        inpRecoDatos$1.value= "";
        
};

const botonAgregar = document.getElementById("botonAgregar");
const botonBalance = document.getElementById("botonBalance");
const inpRecoDatos = document.getElementById("recoDatos");

var contador = 1;
var sActCirculante = 0, sActNoCirculante = 0,sTotalActivo = 0, sPasivoCortoPlazo = 0,sPasivoLargoPlazo = 0,sCapitalContable = 0, sPasivoCapital = 0;



botonAgregar.addEventListener("click", () =>
{   
   if(contador < datos.length)
   {
  
      recoleccionDatos.push(parseInt(inpRecoDatos.value));
      //console.log(`${contador}. ${datos[contador]}${inpRecoDatos.value}`);
      contador++;
      cambioDeInformacion(contador-1);
      
   }
   else
   {
     inpRecoDatos.style.display = "none";
     botonAgregar.style.display = "none";

   }
});
const calcular = () =>
{
  for(var i = 0; i < 5; i++)
    {
      sActCirculante += recoleccionDatos[i];
    }

    for(var i = 5; i < 16;i++ )
    {
      sActNoCirculante += recoleccionDatos[i];
    }
    sTotalActivo =sActCirculante + sActNoCirculante;

    for(var i = 16; i < 20; i++ )
    {
      sPasivoCortoPlazo += recoleccionDatos[i];
    }

     sPasivoLargoPlazo = recoleccionDatos[20];
     sCapitalContable = recoleccionDatos[21] + recoleccionDatos[22];
     sPasivoCapital = sPasivoCortoPlazo + sPasivoLargoPlazo + sCapitalContable;

};  

/*
const imprimirDatosCapturados = () =>
{
  datos.forEach ( (datos, index) =>
  {
      console.log(`${index}${datos}  ${recoleccionDatos[index]}`);
  });  
}**/


const imprimir = () =>
{
  console.log("Activo circulante");
  for(var i = 0; i < 5; i++)
    {
      console.log(`${datos[i]}  ${recoleccionDatos[i]}`);
      
    }
    console.log(`Suma activo circulante: ${sActCirculante}`);

  console.log("Activo no circulante");
  for(var i = 5; i < 16;i++ )
  {
      console.log(`${datos[i]}  ${recoleccionDatos[i]}`);
  }
    console.log(`Suma activo no circulante: ${sActNoCirculante}`);
    console.log(`Suma total activo: ${sTotalActivo}`);

    console.log("Pasivo a Corto Plazo");
    for(var i = 16; i < 20; i++ )
    {
      console.log(`${datos[i]} ${recoleccionDatos[i]}`);
    }
    console.log(`Suma pasivo a largo plazo: ${sPasivoCortoPlazo}`);

    console.log("Pasivo a largo plazo");
    console.log(`${datos[20]}: ${recoleccionDatos[20]}`);
    
    console.log("Capital Contable");
    console.log(`${datos[21]} ${recoleccionDatos[21]}`);
    console.log(`${datos[22]} ${recoleccionDatos[22]}`);
    console.log(`\nSuma Capital contable: ${sPasivoCapital}`);
};
botonBalance.addEventListener("click", () =>
{
    calcular();
    imprimir();

}
);
