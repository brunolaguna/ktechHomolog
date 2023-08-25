import { deleteFirstLoad } from "../index.js"

const source_formImage = document.getElementById('formImage')
const link_css = document.querySelector('link')
const rowDiv = document.getElementById('row').style

if ( window.location.pathname === '/' )
{
  source_formImage.src = 'https://ktech.digital/wp-content/uploads/2021/12/Logo-lado.png'
}
if ( window.location.pathname === '/LeroyMerlin' )
{
  source_formImage.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Leroy_Merlin.svg'
  link_css.href = './styles/leroyIndex.css'
}
else if ( window.location.pathname === '/Sirio-Libanes' )
{
  source_formImage.src = './Images/Logo Faculdade Sirio Libanes.png'
  link_css.href = './styles/sirioIndex.css'
  document.querySelector('a').href = 'https://ktechdigital-homolog-34fe4008c979.herokuapp.com/Files/exemploSirio.csv'
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//await sleep(1900)

await deleteFirstLoad()

rowDiv.opacity = '1'