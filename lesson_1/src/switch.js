export const activate = () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(el => {
    el.classList.toggle('noActive');
  });
}