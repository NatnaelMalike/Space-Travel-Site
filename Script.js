const toggle = document.querySelector(".mobile-nav");
const nav = document.querySelector(".page-navigation")
toggle.addEventListener("click", () => {
  const visible = nav.getAttribute("data-visible")
  if (visible === "true"){
    nav.setAttribute('data-visible', 'false')
    toggle.setAttribute('aria-expanded', 'false')
  }else{
    nav.setAttribute('data-visible', 'true');
    toggle.setAttribute('aria-expanded', 'true')

  }
})