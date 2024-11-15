let sae_number = Object.keys(SAE);
let title = [];
let comp = [];
let zone_sae = ""

for (let i = 0; i < sae_number.length; i++) {
    title.push(SAE[sae_number[i]].titre);
    comp.push(SAE[sae_number[i]].compétences);
}

for(let t = 0; t<sae_number.length; t++) {
    let tmp = ""
    comp[t].forEach(element => {
        tmp+='<div class="competences">'+element+'</div>'
    });
    zone_sae += '<a href="sae-document.html"><div class="sae"><h3>'+ sae_number[t]+'</h3><p>'+title[t]+'</p>'+tmp+'</div></a>'
}

document.querySelector(".container-sae").innerHTML = zone_sae