const LCL = parseInt(localStorage.getItem(`count${getID()}`));
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes("operator")) {
    if (LCL) {
      if (LCL >= 4) {
        localStorage.setItem('count', 0);
        document.getElementById('medium-try').remove();
      } else {
        document.querySelector('input[name="oid"]').value = "8718";
        localStorage.setItem('count', LCL + 1);
      }
    } else {
      localStorage.setItem('count', 0);
    }
  }
});
function getID(){
  
}
