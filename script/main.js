//day1
const btnBurger = document.querySelector('.btn-burger');
//poluchim elementy
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');



const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

const openMenu=()=>{
    //catalog.className = '111';//переимен класс
    catalog.classList.add('open');//открываем меню
    overlay.classList.add('active');
} 

const closeMenu=()=>{
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
} 

const openSubMenu = (event) => {
 event.preventDefault();
 const target = event.target;
 const itemList = target.closest('.catalog-list__item');
 if (itemList){
     subcatalogHeader.innerHTML = itemList.innerHTML;//выбираем текст из таргета и запис в хедер
     subCatalog.classList.add('subopen');
 }
}
const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}

//sobitiya
//vizovi funccii
btnBurger.addEventListener('click',openMenu);
btnClose.addEventListener('click',closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);





/*document. addEventListener('keydown', (event)=>{
    if(event.code ==='Escape')
    closeMenu();
})*/
