function getData(){
    //key=462c6753
    var input=document.querySelector("#input").value
   const url=`http://www.omdbapi.com/?t=${input}&apikey=462c6753`

    movieDetail()
    
   async function movieDetail(){
try{
    var res=await fetch(url);

    var users=await res.json()
   append(users)
    console.log(users)

}catch(err){
console.log(err)
let container=document.querySelector("#container")
let image=document.createElement("img")
image.src="https://media0.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif"

container.append(image)

}
   }

   function append(data){
       let container=document.querySelector("#container")
       container.innerHTML=null

      
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=data.Poster;
       

        let movie=document.createElement("h3")
        movie.innerText="Movie-"+" "+data.Title

        let imdb=document.createElement("p")
        imdb.innerText="iMDB-"+" "+data.imdbRating;

        let date=document.createElement("p");
        date.innerText="Released date-"+" "+data.Released;

        if(data.imdbRating>=8.5)
        {
        
            imdb.innerText="iMDB-"+" "+data.imdbRating+" "+"Recommended";
            imdb.style.color="red"
        }

        div.append(image,movie,imdb,date)

        document.querySelector("#container").append(div)
           
   }
  
}



