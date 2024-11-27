// J'initialise des variables et des tableaux vide car je trouve ça plus simple que d'utiliser les objets directement
let sae_number = Object.keys(SAE);
let title = [];
let comp = [];
let zone_sae = ""

// J'ajoute les valeurs dans les tableaux grâce à une boucle
for (let i = 0; i < sae_number.length; i++) {
    title.push(SAE[sae_number[i]].titre);
    comp.push(SAE[sae_number[i]].compétences);
}

// Je fait une boucle permettant d'ajouter chaque sae dans une chaine de caractère vide
for(let t = 0; t<sae_number.length; t++) {
    let tmp = ""
    // Je décompose les compétences si il y en a plusieurs et je les met dans un marquee (balise html)
    if(comp[t].length>1) {
        let tmp2 =""
        comp[t].forEach(e => {
            tmp2+=e+" ";
        })
        
        tmp+='<div class="competences"><marquee direction="left" scrollamount="6">'+tmp2+'</marquee></div>';
    }
    
    // Si il n'y a qu'une compétence j'ajoute simplement la compétence dans une div
    else {
        tmp+='<div class="competences">'+comp[t]+'</div>'
    }

    // J'ajoute les valeurs dans ma chaine de caractère vide
    zone_sae += `<a href="sae-document.html?sae=${sae_number[t]}" class="sae-color">
                    <div class="sae">
                        <h3>${sae_number[t]}</h3>
                        <p>${title[t]}</p>
                        ${tmp}
                    </div>
                </a>`
}

// Je remplace le contenu de la div devant contenir mes SAE par le contenu de la chaine de caractère
document.querySelector(".container-sae").innerHTML = zone_sae