/*jshint esversion: 6 */


/* Threes Made */

var threesSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/16EypE4AkZVutLblpQEpsBu4ly7ziqBRYPxlv7wO1SJs/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: threesSpreadsheetUrl,
                     callback: function gotData(data) {
  const table = document.getElementById("threes-made").tBodies[0];
  for (const player of data) {
    const row = table.insertRow(-1); // index -1 inserts at bottom
    const keys = Object.keys(player);
    for (let i = 0; i < keys.length; i++) {
      const c = row.insertCell(i);
      c.appendChild(document.createTextNode(player[keys[i]]));
    }
  }
},
                     simpleSheet: true } );
  }

  function showInfo(data, tabletop) {
    console.log(data);
  }


 

/* Free Throws Made */

var freeThrowsSpreadsheet = 'https://docs.google.com/spreadsheets/d/18R79tUPU4QqMwaG3QPUY_0G44umzjRyOS5GLFmQ_1AU/edit?usp=sharing';

  function init2() {
    Tabletop.init( { key: freeThrowsSpreadsheet,
                     callback: function gotData(data) {
  const table = document.getElementById("fts-made").tBodies[0];
  for (const player of data) {
    const row = table.insertRow(-1); // index -1 inserts at bottom
    const keys = Object.keys(player);
    for (let i = 0; i < keys.length; i++) {
      const c = row.insertCell(i);
      c.appendChild(document.createTextNode(player[keys[i]]));
    }
  }
},
                     simpleSheet: true } );
  }

  function showInfo(data, tabletop) {
    console.log(data);
  }



  window.addEventListener('DOMContentLoaded', init);  
  window.addEventListener('DOMContentLoaded', init2);  







	  

