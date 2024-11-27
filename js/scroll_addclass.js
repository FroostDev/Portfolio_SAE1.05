document.addEventListener("scroll", addClass, {passive: true});
function addClass(){
    document.querySelectorAll("[data-class]").forEach(e=>{
        if(e.getBoundingClientRect().y < window.innerHeight - (e.dataset.offset || 0)){
            setTimeout(()=>{
                e.classList.add(e.dataset.class);
                e.removeAttribute("data-class");
            }, e.dataset.delay || 0)
        }
    })
}
addClass();

/*********************************************************/
/* Version avec suppression de la class quand on remonte */
/*********************************************************/

function addClass() {
        document.querySelectorAll("[data-class]").forEach(e => {
            if (e.getBoundingClientRect().y < window.innerHeight - (e.dataset.offset || 0)) {
                if(!e.classList.contains(e.dataset.class) && (e.dataset.timer || "") == ""){
                    e.dataset.timer = setTimeout(() => {
                        e.classList.add(e.dataset.class);
                        clearTimeout(e.dataset.timer);
                        e.dataset.timer = "";
                    }, e.dataset.delay || 0)
                }
            } else {
                if(e.dataset.timer)clearTimeout(e.dataset.timer);
                e.classList.remove(e.dataset.class);
            }
        })
    }
    window.addEventListener("scroll", addClass, { passive: true });
    addClass();

// Code copié collé de celui de monsieur Lehmann (pas besoin d'expliquer)