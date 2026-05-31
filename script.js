const API_KEY='GANTI_DENGAN_API_KEY_TMDB';
loadDrama();
async function loadDrama(){
 const res=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_origin_country=CN&language=id-ID&sort_by=popularity.desc`);
 const data=await res.json();
 showData(data.results||[]);
}
async function searchDrama(){
 const q=document.getElementById('searchInput').value;
 const res=await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${q}&language=id-ID`);
 const data=await res.json();
 showData(data.results||[]);
}
function showData(data){
 const movies=document.getElementById('movies');
 movies.innerHTML='';
 data.forEach(item=>{
  const poster=item.poster_path?`https://image.tmdb.org/t/p/w500${item.poster_path}`:'';
  movies.innerHTML+=`<div class="card"><img src="${poster}"><div class="info">${item.name||''}<br>⭐ ${item.vote_average||0}</div></div>`;
 });
}