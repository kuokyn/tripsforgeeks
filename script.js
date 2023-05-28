
//-------------animation-on-scroll----------------//
// у каждого объекта, у которого есть класс animItems
// при достижении скроллом 1/4 высоты окна браузера
// ему добавляется класс active
// если недокрутили или перекрутили, класс active отбирается

// const animItems = document.querySelectorAll('.anim-items');
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active')
//         }
//             else {
//                 entry.target.classList.remove('active')
//             }
        
//     })
// },
//    { threshold: 0.5
//    });
// //
//   for (let i = 0; i < animItems.length; i++) {
//    const elements = animItems[i];

//     observer.observe(elements);
// } 
// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll(){
//         for (let index = 0; index < animItems.length; index++){
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('active');
//             } else{
//                 animItem.classList.remove('active');
//             }
//         }
//     }
//     function offset(el){
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        
//     }
//     animOnScroll();
// }
