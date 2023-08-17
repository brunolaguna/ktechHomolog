const source_formImage = document.getElementById('formImage')
const link_css = document.querySelector('link')
const rowDiv = document.getElementById('row').style

if ( window.location.pathname === '/LeroyMerlin' )
{
  source_formImage.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Leroy_Merlin.svg'
  link_css.href = './styles/leroyIndex.css'
}
else if ( window.location.pathname === '/Sirio-Libanes' )
{
  source_formImage.src = './Images/Logo Faculdade Sirio Libanes.png'
  link_css.href = './styles/sirioIndex.css'
}

rowDiv.opacity = '1'