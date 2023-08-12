const tablist = document.querySelector('[role = "tablist"]')
const tabs = tablist.querySelectorAll('[role = "tab"]')

tablist.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener('click', changePanel)
})
let focus = 0;
function changeTabFocus(e){
  const leftKey = 37; 
  const rightKey = 39;
  if (e.keyCode === leftKey || e.keyCode === rightKey) {
    tabs[focus].setAttribute('tabindex', -1);
  }
  if(e.keyCode === leftKey){  
    focus = (focus === 0)? tabs.length - 1: focus - 1;
  }else if (e.keyCode === rightKey) {
    focus = (focus === 3)? 0: focus + 1;
  }
  tabs[focus].setAttribute("tabindex", 0);
  tabs[focus].focus();
}
function changePanel(e){
  const clicked = e.target;
  const targetPanel = clicked.getAttribute("aria-controls");
  const targetImage = clicked.getAttribute("data-image");
  const tabContainer = clicked.parentNode;
  const mainContainer = tabContainer.parentNode;
  hideContent(mainContainer, '[role="tabPanel"]');
  showContent(mainContainer, `#${targetPanel}`);
  hideContent(mainContainer, 'picture');
  showContent(mainContainer, `#${targetImage}`);
  tabContainer.querySelector('[aria-selected = "true"]').setAttribute("aria-selected", false);
  clicked.setAttribute("aria-selected","true");
  
}
const showContent = (parent, role) => {parent.querySelector(role).removeAttribute('hidden');}
const hideContent = (parent, role) => { parent.querySelectorAll(role).forEach((items) => items.setAttribute('hidden', true));}