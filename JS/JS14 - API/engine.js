let URL = 'https://dog.ceo/api/breeds/image/random'

const dogapi = async () =>{
   let resp =  await fetch(URL)


  let exemplo = resp.json()
 console.log(exemplo)
   console.log(resp)
}
dogapi()


















