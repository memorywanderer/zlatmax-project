// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Вызываем функцию, если где-то на странице произошел клик
document.addEventListener('click', documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
   menuBlocks.forEach(menuBlock => {
      const menuCategoryCount = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
      menuBlock.classList.add(`sub-menu-catalog__block_${menuCategoryCount}`);
   });
}

function documentActions(e) {
   const targetEl = e.target;
   if (targetEl.closest('[data-parent]')) {
      const subMenuId = targetEl.dataset.parent ? targetEl.dataset.parent : null;
      const subMenuBlock = document.querySelector(`[data-sub-menu="${subMenuId}"]`);

      if (subMenuBlock) {
         const activeLink = document.querySelector('._sub-menu-active');
         const activeBlock = document.querySelector('._sub-menu-open');
         if (activeLink && activeLink !== targetEl) {
            activeLink.classList.remove('_sub-menu-active');
            activeBlock.classList.remove('_sub-menu-open');
            document.documentElement.classList.remove('sub-menu-open');
         }
         document.documentElement.classList.toggle('sub-menu-open');
         targetEl.classList.toggle('_sub-menu-active');
         subMenuBlock.classList.toggle('_sub-menu-open');
      } else {
         console.log("Ой, такого под-меню нет:-(")
      }

      e.preventDefault();
   }
   if (targetEl.closest('.menu-top-header__link_catalog')) {
      document.documentElement.classList.add('catalog-open');
      e.preventDefault();
   }
   if (targetEl.closest('.menu-catalog__back')) {
      document.documentElement.classList.remove('catalog-open');
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;

      e.preventDefault();
   }

   if (targetEl.closest('.sub-menu-catalog__back')) {
      document.documentElement.classList.remove('sub-menu-open');
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;

      e.preventDefault();
   }
}
