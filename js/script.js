// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue({
    el: '#root',
    data: {
      mailList: []
    },
    mounted: function() {
        for(i=0; i<11; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(
                    result =>{
                        console.log(result.data.response);
                        this.mailList.push(result.data.response);
                    }
                )
        }

    }
  })