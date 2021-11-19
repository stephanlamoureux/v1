const url = 'https://dev.to/api/articles?username=stephanlamoureux'
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
