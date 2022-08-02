// const { value: gamaAuto } = await Swal.fire({
//     title: 'Elija una gama de vehiculo',
//     input: 'select',
//     inputOptions: {
//       'Gama Baja': {
//         gol: 'Volkswagen Gol Trend',
//         kwid:'Renault Kwid',
//         etios:'Toyota Etios',
//         cronos:'fiat Cronos'
//       },
//       'Gama Media': {
//         cruze:'chevrolet Cruze',
//         ffocus:'Ford Focus',
//         sentra:'Nissan sentra',
//         golf:'Volkswagen Golf'
//       },
      
//     },
//     inputPlaceholder: 'Seleccione la gama y el modelo',
//     showCancelButton: true,
//     inputValidator: (value) => {
//       return new Promise((resolve) => {
//         // if (value === 'oranges') {
//         //   resolve()
//         // } else {
//         //   resolve('You need to select oranges :)')
//         // }
//       })
//     }
//   })
  
//   if (gamaAuto) {
//     Swal.fire(`You selected: ${gamaAuto}`)
//   }