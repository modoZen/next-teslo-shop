export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

// // [1,2,3,4,5,6,7]
// // [1,2,3,4,5, '...', 50]
// // [1, '...', 46,47,48,49,50]
// // [8,9,10,11,12,'...', 50]
// // [1, '...', 11,12,13, '...', 50]
// export const generatePaginationNumbers = (
//   currentPage: number,
//   totalPages: number
// ) => {
//   //  Si el numero total de páginas es 7 o menos vamos a mostrar todas las páginas sin puntos suspensivos
//   if (totalPages <= 7) {
//     return Array.from({ length: totalPages }, (_, i) => i + 1); // [1,2,3,4,5,6,7];
//   }

//   // Si la página actual está entre las primeras 4 páginas
//   if (currentPage <= 4) {
//     return [1, 2, 3, 4, 5, "...", totalPages]; //[1,2,3,4,5, '...', 50];
//   }
//   if (currentPage >= totalPages - 3) {
//     return [
//       1,
//       "...",
//       totalPages - 4,
//       totalPages - 3,
//       totalPages - 2,
//       totalPages - 1,
//       totalPages,
//     ];
//   }

//   // Si la página actual esta esta en las 4 primeras y esta dentro de las 15 ultimas
//   if (currentPage <= 15 && currentPage > 4) {
//     return [
//       currentPage - 2,
//       currentPage - 1,
//       currentPage,
//       currentPage + 1,
//       currentPage + 2,
//       "...",
//       totalPages,
//     ];
//   }

//   // Si la página actual está en otro lugar medio
//   // mostrar la primera página, puntos suspensivos, la pagina actual y vecinos
//   return [
//     1,
//     "...",
//     currentPage - 1,
//     currentPage,
//     currentPage + 1,
//     "...",
//     totalPages,
//   ];
// };
