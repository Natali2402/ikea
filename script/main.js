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

/* 
const openMenu = function openMenu(){}
//function declaration v potoke and function expression
//strelochnie funkcii
const openMenu=() => {}

function foo(){}
//ne yavlyaetsya instrukciei

//vizov
openMenu('max');*/

//funccii
const openMenu=()=>{
    //catalog.className = '111';//pereimenovat' class
    catalog.classList.add('open');//otkrivaem menu
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
     subcatalogHeader.innerHTML = itemList.innerHTML;//vibiraem text iz targeta i zapis v header
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