var rApp = new Vue({
    el: '#app',
    data:{
    target:"index",
    team: ""

    },
    methods: {
        takeValue: function(name, team){
         this.target = name;
         this.team = team;
        }
    },
    computed:{
        teamPlayers(){
            return data.tournament[0].players.filter(player => player.team == this.team);//player es algo que yo invento,al igual que name y team que son parametros que usamos//
        }
    }
});


