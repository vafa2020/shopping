// export class Cart {
//
//     static add(id) {
//         const db = localStorage.getItem('Cart')
//         if (db !== null) {
//             const list = JSON.parse(db)
//             list.push({
//                 id: id,
//                 qty: 1
//             })
//             localStorage.setItem('Cart', JSON.stringify(list))
//         } else {
//             const item = [
//                 {
//                     id: id,
//                     qty: 1
//                 }
//             ]
//             localStorage.setItem('Cart', JSON.stringify(item))
//         }
//
//     }
//     static searchById(id) {
//         let result = undefined
//         const db = localStorage.getItem('Cart');
//         if (db !== null) {
//             const list = JSON.parse(db);
//             result = list.find(x => x.id === id);
//         }
//         return result
//     }
//     static update(id, value) {
//         const db = localStorage.getItem('Cart');
//         let list = JSON.parse(db);
//        list.map((item,index)=>{
//           if (item.id === id) {
//               list[index].qty += value;
//               if (list[index].qty === 0) {
//                   list.splice(index, 1)
//               }
//           }
//       })
//          localStorage.setItem('Cart', JSON.stringify(list))
//     }
// }
