// Pour savoir sur quelle SAE on a cliqué
let param = new URLSearchParams(location.search)
let num_sae = param.get("sae")

// J'initialise mes variables utilisé dans mon script
let sae_key = Object.keys(SAE)
let sae_index = sae_key.indexOf(num_sae)
let comp_html = ""
let ac_html = ""
let ac_key = Object.keys(SAE[num_sae].AC)
let ac_value = Object.values(SAE[num_sae].AC)

// Je change le contenu de tout ce que je peut faire juste avec un innerHTML
document.querySelector(".sae-title>h3").innerHTML=sae_key[sae_index]
document.querySelector(".sae-title>h3:nth-child(2)").innerHTML=SAE[num_sae].titre
document.querySelector(".sae-title>h3:last-child").innerHTML="Semestre : " + SAE[num_sae].semestre
document.querySelector(".description>p").innerHTML=SAE[num_sae].description

// Je sépare les compétences en plusieurs div
SAE[num_sae].compétences.forEach(element => {
    comp_html+='<div>'+element+'</div>'
});

// Je sépare les AC en plusieurs paragraphes
for(let i = 0; i<ac_key.length; i++) {
    ac_html += '<p><a href=>'+ac_key[i]+' : '+ac_value[i]+'</a></div>'
}



// j'ajoute les compétence dans leur div
document.querySelector(".competences").innerHTML=comp_html
document.querySelector(".AC").innerHTML=ac_html