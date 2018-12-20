function createTable() {

    const myTable = document.getElementById("tbody");
   
    var members = data.tournament[0].teams;
   
    myTable.innerHTML = "";
   
    var template = "";
   
    for (let i = 0; i < members.length; i++) {
   
      template += `
        <tr>
             <td>${members[i].name}</td>
             <td>${members[i].games}</td>
             <td>${members[i].wins}</td>
             <td>${members[i].loses}</td>
         </tr>
      `;
   
    }
   
    myTable.innerHTML = template;
   }
   createTable();



function playerTable(context, members, keys){

    const teamTable = document.getElementById("tbody2");

    var members = data.tournament[0].players;

    teamTable.innerHTML = "";

    var template = '';
    var template2 = '';
    var keys = ['name', 'games_played', 'ppg', 'rpg', 'apg'];

    for( let i = 0; i < members.length; i++){
        template2 += `<tr>${keys.map(key => tdTemplate(members[i][key]))}</tr>`
         
        template += `
        <tr>
            <td>${members[i].name}</td>
            <td>${members[i].games_played}</td>
            <td>${members[i].ppg}</td>
            <td>${members[i].rpg}</td>
            <td>${members[i].apg}</td>
        </tr>
        `;
   
    }

    console.log(template2)
   
    teamTable.innerHTML = template;
   }

  

   const tdTemplate = val => `<td>${val}</td>`;


   playerTable();

   
   
   
   function teamStats() {

    const stats = document.getElementById("tbody3");
   
    var members = data.tournament[0].teams;
   
    stats.innerHTML = "";
   
    var template = "";
   
    for (let i = 0; i < members.length; i++) {
   
      template += `
        <tr>
             <td>${members[i].name}</td>
             <td>${members[i].total_points}</td>
             <td>${members[i].three_percent}</td>
             <td>${members[i].fg_percent}</td>
             <td>${members[i].ft_percent}</td>
             <td>${members[i].ppp}</td>
         </tr>
      `;
   
    }
   
    stats.innerHTML = template;
   }
   teamStats();

   