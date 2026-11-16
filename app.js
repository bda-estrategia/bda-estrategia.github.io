
const norm=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const search=document.getElementById('ref-search');const entries=[...document.querySelectorAll('.reference')];
search.addEventListener('input',()=>{const q=norm(search.value.trim());let count=0;entries.forEach(el=>{const show=norm(el.dataset.search).includes(q);el.hidden=!show;if(show)count++;});document.getElementById('ref-count').textContent=`${count} de ${entries.length} referencias`;document.getElementById('empty-results').hidden=count!==0;});
document.getElementById('copy-link').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('https://bda-estrategia-ucr-2026.carlosvillalobos2003.chatgpt.site');status.textContent='Enlace copiado.';}catch{status.textContent='https://bda-estrategia-ucr-2026.carlosvillalobos2003.chatgpt.site';status.style.overflowWrap='anywhere';}});

// Keep anchor navigation recognizable after clicking, bookmarking, or going back.
const updateCurrentSection = () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.hash === location.hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
window.addEventListener('hashchange', updateCurrentSection);
updateCurrentSection();
