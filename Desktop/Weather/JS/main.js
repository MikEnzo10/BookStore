var vm = new Vue({
    el: '#app',
    data: {

        elTiempo: [],
        listaCiudades: [],
        arrayImagenes: ["Images/Yafran.jpg",
                  "Images/Zuwarah.jpg",
                  "Images/Sabratah.jpg",
                  "Images/Gharyan.jpg",
                  "Images/Zawiya.jpg",
                  "Images/Tripoli.jpg",
                  "Images/Tarhuna.jpg",
                  "Images/Masallatah.jpg",
                  "Images/Al Khums.jpg",
                  "Images/Zlitan.jpg",
                  "Images/Birkirkara.jpg",
                  "Images/Ragusa.jpeg",
                  "Images/Pozallo.jpg",
                  "Images/Modica.jpg",
                  "Images/Rosolini.jpg"]

    },

    methods: {

        llamarFetch() {

            fetch("https://api.myjson.com/bins/i8run", {

                method: "GET",

            }).then(response => {

                if (response.ok) {

                    return response.json();
                }


                throw new Error(response.statusText);
            }).then(json => {


                let elTiempo = json;
                
                
                this.listaCiudades = elTiempo.list;                
                console.log(this.listaCiudades);
                
                console.log(this.arrayImagenes);
                
                this.introducirImagen ();
                
                console.log (this.listaCiudades)
                
             


            }).catch(function (error) {
                console.log("Request failed: " + error.message);
            });


        },
        
        
        introducirImagen (){
        
           this.listaCiudades.map ((ciudad,index) => ciudad.imagen = this.arrayImagenes[index]) 
            
        }
        
    

    },

    created: function () {
        this.llamarFetch();
       
    },
    
   
})
