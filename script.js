
const API_KEY='1ca6247cb588c993969b3781d7a45cb7';

async function loadDrama(){
 const url=`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_origin_country=CN&sort_by=popularity.desc&language=id-ID`;
 const res=await fetch(url);
 const data=await res.json();
 render(data.results||[]);
}

function render(items){
 const el=document.getElementById('movies');
 el.innerHTML='';
 items.forEach(item=>{
  const poster=item.poster_path?`https://image.tmdb.org/t/p/w500${item.poster_path}`:'';
  el.innerHTML+=`
  <div class="card">
   <img src="${poster}" alt="">
   <div class="info">
    <div class="title">${item.name||''}</div>
    <div>⭐ ${item.vote_average||0}</div>
   </div>
  </div>`;
 });
}

loadDrama();
