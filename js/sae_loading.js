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
    if(comp[t].length>1) {
        let tmp2 =""
        comp[t].forEach(e => {
            tmp2+=e+" ";
        })
        
        tmp+='<div class="competences"><marquee direction="left" scrollamount="6">'+tmp2+'</marquee></div>';
    }
    
    else {
        tmp+='<div class="competences">'+comp[t]+'</div>'
    }

    zone_sae += `<a href="sae-document.html?sae=${sae_number[t]}" class="sae-color">
                    <div class="sae">
                        <h3>${sae_number[t]}</h3>
                        <p>${title[t]}</p>
                        ${tmp}
                    </div>
                </a>`
}

document.querySelector(".container-sae").innerHTML = zone_sae