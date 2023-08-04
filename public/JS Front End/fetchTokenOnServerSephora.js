export async function fetchToken() {

  return new Promise((resolve, reject) => {
    
    const body = { pathName: window.location.pathname }

    fetch('/accessToken', {
  
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
  
    })
  
    .then(response => response.json())
  
    .then(data => { resolve(data.accessToken) })
  
    .catch(error => { console.log(error) })

  })

}