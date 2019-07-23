var vm = new Vue({
    el: '#app',
    data: {

        booksList: [],
        displayBook: [],
        search:"",
        newIntput: [],
        myBooks: [],
        

    },

    methods: {

        llamarFetch() {

            fetch("https://api.myjson.com/bins/zyv02", {

                method: "GET",

            }).then(response => {

                if (response.ok) {

                    return response.json();
                }


                throw new Error(response.statusText);
            }).then(json => {


                let booksList = json;
                
                console.log(booksList);
                
                this.myBooks = booksList.books;
                
                console.log(booksList.books);
                
                this.displayBook = this.myBooks;


            }).catch(function (error) {
                console.log("Request failed: " + error.message);
            });


        },
        
        obtenerInput (){
            this.newInput = document.getElementById("miBusqueda").value;
            var librosFiltrados = this.myBooks.filter (libro => libro.title.toLowerCase().includes(this.newInput.toLowerCase()))
            
            this.displayBook = librosFiltrados;
            
            console.log (librosFiltrados)    
        }     

    },

    created: function () {
        this.llamarFetch();
        this.obtenerInput();
    },
    
   
})
