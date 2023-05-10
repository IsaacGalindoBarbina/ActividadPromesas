// function sumarUno(numero, callback) {
//     if (numero >= 7) {
//       callback("numero muy grande");
//       return;
//     }
//     setTimeout(function () {
//       callback(null, numero + 1);
//     }, 2000);
//   }

function sumarUnoPromesa(numero){
    //resolve en caso de exitoso
    //reject en caso de error
    console.log(numero);
    var promesa = new Promise (function (resolve,reject){
        if (numero >= 7) {
            reject("numero muy grande");
            return;
          }
          setTimeout(function () {
            resolve( numero + 1);
          }, 2000);
    });
    return promesa;
  }

  //console.log(sumarUnoPromesa(5));
//   sumarUnoPromesa(5).then(function(nuevoValor){
//     console.log(nuevoValor);
//     sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
//         console.log(nuevoValor);
//     })
//   })

// sumarUnoPromesa(5).then((nuevoValor)=>{
//     console.log(nuevoValor);
//     return sumarUnoPromesa(nuevoValor);
// }).then((nuevoValor)=>{
//     console.log(nuevoValor);
    
// }).then((nuevoValor)=>{
//     console.log(nuevoValor);
// }).catch((err)=>{
//     console.log(err);
// })


//jaloooo bien
// sumarUnoPromesa(5).then((nuevoValor)=>{
//     //console.log(nuevoValor);
//     return sumarUnoPromesa(nuevoValor);
// }).then((nuevoValor)=>sumarUnoPromesa(nuevoValor))
// .then(sumarUnoPromesa)
// .catch((err)=>{
//     console.log(err);
// })

sumarUnoPromesa(5)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch((err)=>{
    console.log(err);
})