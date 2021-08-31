function showNavigation() {
  let navMenu = document.querySelector('.nav-menu')
  if(navMenu.style.display === 'flex'){
    navMenu.style.display = 'none'
  }else{
    navMenu.style.display = 'flex'
    
  }
}