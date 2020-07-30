const week = [];
const curr = new Date;
const currentDate = new Date(curr).toISOString().slice(0, 10);
const baseURL = '/api/v1/item'
const sourceData = {};
const rowMap = {};
let itemDay = '';
function getDaysAndDates(){
  for (let i = 0; i <7; i++) {
    const first = curr.getDate() - curr.getDay() + i;
    const day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    if(day >= currentDate){
      $(`#button${i}`).css({
      	"display" : "inline-block"
      })
    }
    week.push(day)
  }
  for(let i=0;i<week.length;i++){
    const day = new Date(currentDate).getDay();
    if(day === i){
      $(`#td${i+1}`).html(week[i].split('-')[2]);
      $(`#td${i+1}`).css({
        "height": "50px",
        "border-radius": "30px",
        "width" : "50px",
        "border-radius" : "50%",
        "background" : "blue",
        "display" : "block",
        "margin": "auto",
        "text-align": "center",
        "line-height": "35px",
        "margin-top" : "5px",
        "color" : "white"
      })
      $(`#th${i+1}`).css({
        "color" : "blue"
      })
    }
    else
      $(`#td${i+1}`).html(week[i].split('-')[2]);
  }
  $.ajax({
    type : 'GET',
    url : baseURL + `/list`,
    xhrFields: { withCredentials: true },
    success : function(data){
      let numberOfRows = 0;
      for(let i=0;i<week.length;i++){
        data[week[i]][i].length > numberOfRows ? numberOfRows  = data[week[i]][i].length : '';
      }
      for(let i=0;i<numberOfRows;i++){
        const table = document.getElementById("to_do");
        const row = table.insertRow(i+2);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);
        cell6 = row.insertCell(6);
        row.id = `row${i+2}`;
        if(data[week[0]][0][i]){
          const done = document.createElement("button");
          done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${0} row${i+2}`)
          $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
          done.id = 'done';
          const remove = document.createElement("button");
          remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${0} row${i+2}`)
          $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
          remove.id = 'remove';
          const item = document.createElement("p");
          const key = Object.keys(data[week[0]][0][i])[0] ;
          if(data[week[0]][0][i][key] === 'completed'){
            cell0.innerHTML = `<div class="display1">${key}</div`;
          }else{
            const item = document.createElement("p");
            item.innerHTML = key;
            item.className = 'display';
            cell0.appendChild(done)
            cell0.appendChild(item);
            cell0.appendChild(remove)
          }    
        }
        if(data[week[1]][1][i]){
          const done = document.createElement("button");
          done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${1} row${i+2}`)
          $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
          done.id = 'done';
          const remove = document.createElement("button");
          remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${1} row${i+2}`)
          $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
          remove.id = 'remove';
          const key = Object.keys(data[week[1]][1][i])[0];
          if(data[week[1]][1][i][key] === 'completed'){
            cell1.innerHTML = `<div class="display1">${key}</div`;
          }else{
            const item = document.createElement("p");
            item.innerHTML = key;
            item.className = 'display';
            cell1.appendChild(done)
            cell1.appendChild(item);
            cell1.appendChild(remove)
          }          
        }
        if(data[week[2]][2][i]){
          const done = document.createElement("button");
          done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${2} row${i+2}`)
          $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
          done.id = 'done';
          const remove = document.createElement("button");
          remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${2} row${i+2}`)
          $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
          remove.id = 'remove';
          const key = Object.keys(data[week[2]][2][i])[0];
          if(data[week[2]][2][i][key] === 'completed'){
            cell2.innerHTML = `<div class="display1">${key}</div`;
          }else{
            const item = document.createElement("p");
            item.innerHTML = key;
            item.className = 'display';
            cell2.appendChild(done)
            cell2.appendChild(item);
            cell2.appendChild(remove)
          }
        }
        if(data[week[3]][3][i]){
          const done = document.createElement("button");
          done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${3} row${i+2}`)
          $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
          done.id = 'done';
          const remove = document.createElement("button");
          remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${3} row${i+2}`)
          $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
          remove.id = 'remove';
          const key = Object.keys(data[week[3]][3][i])[0];
          if(data[week[3]][3][i][key] === 'completed'){
            cell3.innerHTML = `<div class="display1">${key}</div`;
          }else{
            const item = document.createElement("p");
            item.innerHTML = key;
            item.className = 'display';
            cell3.appendChild(done)
            cell3.appendChild(item);
            cell3.appendChild(remove);
          }          
        }
        if(data[week[4]][4][i]){
          const done = document.createElement("button");
          done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${4} row${i+2}`)
          $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
          done.id = 'done';
          const remove = document.createElement("button");
          remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${4} row${i+2}`)
          $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
          remove.id = 'remove';
          const key = Object.keys(data[week[4]][4][i])[0];
          if(data[week[4]][4][i][key] === 'completed'){
            cell4.innerHTML = `<div class="display1">${key}</div`;
          }else{
            const item = document.createElement("p");
            item.innerHTML = key;
            item.className = 'display';
            cell4.appendChild(done)
            cell4.appendChild(item);
            cell4.appendChild(remove)
          }            
        }
        if(data[week[5]][5][i]){
          const done = document.createElement("button");
          done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${5} row${i+2}`)
          $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
          done.id = 'done';
          const remove = document.createElement("button");
          remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${5} row${i+2}`)
          $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
          remove.id = 'remove';
          const key = Object.keys(data[week[5]][5][i])[0];
          if(data[week[5]][5][i][key] === 'completed'){
            cell5.innerHTML = `<div class="display1">${key}</div`;
          }else{
            const item = document.createElement("p");
            item.innerHTML = key;
            item.className = 'display';
             cell5.appendChild(done)
             cell5.appendChild(item);
             cell5.appendChild(remove)
          }   
        }
        if(data[week[6]][6][i]){
          const done = document.createElement("button");
          done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${6} row${i+2}`)
          $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
          done.id = 'done';
          const remove = document.createElement("button");
          remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${6} row${i+2}`)
          $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
          remove.id = 'remove';
          const key = Object.keys(data[week[6]][6][i])[0];
          if(data[week[6]][6][i][key] === 'completed'){
            cell6.innerHTML = `<div class="display1">${key}</div`;
          }else{
            const item = document.createElement("p");
            item.innerHTML = key;
            item.className = 'display';
            cell6.appendChild(done)
            cell6.appendChild(item);
            cell6.appendChild(remove)
          } 
        }
        $("#to_do tbody").on('click','#done',function(){
          const classes = this.className.split(' ');
          const index = classes[4].charAt(3);
          const row = classes[5];
          var $row = $(this).closest("tr"),
          $tds = $row.find("td");
          $.each($tds, function(){
            if(this.cellIndex == index){
              const item = document.createElement("div");
              item.innerHTML = $(this).text();
              item.className = 'display1';
              item.id = 'task';
              const rowValue = document.getElementById(row);
              const cells = rowValue.getElementsByTagName('td');
              switch(index){
                case "0" :
                  cells[0].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break
                case "1" :
                  cells[1].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "2" :
                  cells[2].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "3" :
                  cells[3].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "4" :
                  cells[4].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "5" :
                  cells[5].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "6" :
                  cells[6].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
              }
              $.ajax({
                type : 'PUT',
                url : baseURL + `/done`,
                xhrFields: { withCredentials: true },
                data : {date : week[index], day : index,
                  item : $(this).text()
                },
                success : function(data){ 
                },
                error:function(data) {
                  $("#response").text(data.responseText);
                  $('#response').css({
                    "display": "flex",
                    "justify-content": "center",
                    "color": "red",
                    "font-size": "larger"
                  })  
                }   
              })
            }
          })
        })
        $("#to_do tbody").on('click','#remove',function(){
          const classes = this.className.split(' ');
          console.log(classes)
          const index = classes[4].charAt(3);
          const row = classes[5];
          var $row = $(this).closest("tr"),
          $tds = $row.find("td");
          let item = '';
          $.each($tds, function(){
            if(this.cellIndex == index){
              const rowValue = document.getElementById(row);
              const cells = rowValue.getElementsByTagName('td');
              switch(index){
                case "0" :
                  item = $(this).text();
                  cells[0].innerHTML = '';
                  break
                case "1" :
                  item = $(this).text();
                  cells[1].innerHTML = '';
                  break;
                case "2" :
                  item = $(this).text();
                  cells[2].innerHTML = '';
                  break;
                case "3" :
                  item = $(this).text();
                  cells[3].innerHTML = '';
                  break;
                case "4" :
                  item = $(this).text();
                  cells[4].innerHTML = '';
                  break;
                case "5" :
                  item = $(this).text();
                  cells[5].innerHTML = '';
                  break;
                case "6" :
                  item = $(this).text();
                  cells[6].innerHTML = '';
                  break;
              }
              $.ajax({
                type : 'DELETE',
                url : `${baseURL}/delete`,
                xhrFields: { withCredentials: true },
                data : {date : week[index], day : index,
                  item
                },
                success : function(data){
                },
                error:function(data) {
                  $("#response").text(data.responseText);
                  $('#response').css({
                    "display": "flex",
                    "justify-content": "center",
                    "color": "red",
                    "font-size": "larger"
                  })  
                }
              }) 
            }
          })
        })
      }
    },
    error:function(data) {
      $("#response").text(data.responseText);
      $('#response').css({
        "display": "flex",
        "justify-content": "center",
        "color": "red",
        "font-size": "larger"
      })  
    }
  })
}

function addItem(){
  $('#add_item').css({
  	"display" : "inline-block"
  })
}
 
function add(e){
  e.preventDefault();
  if(week.includes($('#date').val())){
  	if($('#date').val() >= currentDate){
  	  $('#message').empty();
      $('#add_item').css({
  	    "display" : "none"
      })
      let cell0 = ''; let cell='';let cell2='';let cell3='';let cell4 ='';let cell5='';
      let cell6='';
      itemDay = new Date($('#date').val()).getDay();
      $.ajax({
       type : 'GET',
       url : baseURL + `/list`,
       xhrFields: { withCredentials: true },
       success : function(data){
  	    const items = data[week[itemDay]][itemDay].length;
  	    const rowCount = document.getElementById('to_do').rows.length - 3;
  	    const done = document.createElement("button");
        done.setAttribute("class",`pull-left sourceText fa fa-check-circle day${itemDay} row${items+2}`)
        $(done.sourceText).append('<i class="fa fa-check-circle"></i>');
        done.id = 'done';
        const remove = document.createElement("button");
        remove.setAttribute("class",`pull-right sourceText fa fa-trash-o day${itemDay} row${items+2}`)
        $(remove.sourceText).append('<i class="fa fa-trash-o"></i>');
        remove.id = 'remove';
        const item = document.createElement("p");
        item.innerHTML = $('#item').val();
        item.className = 'display';
        item.id = 'task';
  	    if(rowCount === items){
          const table = document.getElementById("to_do");
          const row = table.insertRow(items+2);
          cell0 = row.insertCell(0);
          cell1 = row.insertCell(1);
          cell2 = row.insertCell(2);
          cell3 = row.insertCell(3);
          cell4 = row.insertCell(4);
          cell5 = row.insertCell(5);
          cell6 = row.insertCell(6);
          row.id = `row${items+2}`;
        }else{
      	  const row = document.getElementById(`row${items+2}`);
      	  const cells = row.getElementsByTagName('td');
      	  cell0 = cells[0];
      	  cell1 = cells[1];
      	  cell2 = cells[2];
      	  cell3 = cells[3];
      	  cell4 = cells[4];
      	  cell5 = cells[5];
      	  cell6 = cells[6];
        }
        switch(itemDay){
      	 case 0 :
      	  cell0.appendChild(done)
      	  cell0.appendChild(item);
      	  cell0.appendChild(remove)
      	  sourceData[0] = sourceData[0] || [];
      	  sourceData[0].push($('#item').val())
      	 case 1 :
      	  cell1.appendChild(done)
      	  cell1.appendChild(item);
      	  cell1.appendChild(remove)
      	  sourceData[1] = sourceData[1] || [];
      	  sourceData[1].push($('#item').val())
      	  break;
      	 case 2 :
      	  cell2.appendChild(done)
      	  cell2.appendChild(item);
      	  cell2.appendChild(remove)
      	  sourceData[2] = sourceData[2] || [];
      	  sourceData[2].push($('#item').val())
      	  break;
      	 case 3 :
      	  cell3.appendChild(done)
      	  cell3.appendChild(item);
      	  cell3.appendChild(remove);
      	  sourceData[3] = sourceData[3] || [];
      	  sourceData[3].push($('#item').val())
      	  break;
      	 case 4 :
      	  cell4.appendChild(done)
      	  cell4.appendChild(item);
      	  cell4.appendChild(remove)
      	  sourceData[4] = sourceData[4] || [];
      	  sourceData[4].push($('#item').val())
      	  break;
      	 case 5 :
      	  cell5.appendChild(done)
      	  cell5.appendChild(item);
      	  cell5.appendChild(remove)
      	  sourceData[5] = sourceData[5] || [];
      	  sourceData[5].push($('#item').val())
      	  break;
      	 case 6 :
      	  cell6.appendChild(done)
      	  cell6.appendChild(item);
      	  cell6.appendChild(remove)
      	  sourceData[6] = sourceData[6] || [];
      	  sourceData[6].push($('#item').val())
      	  break;
        }
        $.ajax({
          type : 'POST',
          url : baseURL + `/add`,
          xhrFields: { withCredentials: true },
          data : {date : $('#date').val(), day : itemDay,
            item : $('#item').val()
          },
          success : function(data){ 
          },
          error:function(data) {
            $("#response").text(data.responseText);
            $('#response').css({
              "display": "flex",
              "justify-content": "center",
              "color": "red",
              "font-size": "larger"
            })  
          }
        })
        $("#to_do tbody").on('click','#done',function(){
      	  const classes = this.className.split(' ');
          const index = classes[4].charAt(3);
          const row = classes[5];
      	  var $row = $(this).closest("tr"),
      	  $tds = $row.find("td");
      	  $.each($tds, function(){
      	    if(this.cellIndex == index){
              const item = document.createElement("div");
              item.innerHTML = $(this).text();
              item.className = 'display1';
              item.id = 'task';
              const rowValue = document.getElementById(row);
              const cells = rowValue.getElementsByTagName('td');
              switch(index){
                case "0" :
                  cells[0].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break
                case "1" :
                  cells[1].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "2" :
                  cells[2].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "3" :
                  cells[3].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "4" :
                  cells[4].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "5" :
                  cells[5].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
                case "6" :
                  cells[6].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  break;
              }
              $.ajax({
                type : 'PUT',
                url : baseURL + `/done`,
                xhrFields: { withCredentials: true },
                data : {date : week[index], day : index,
                  item : $(this).text()
                },
                success : function(data){ 
                },
                error:function(data) {
                  $("#response").text(data.responseText);
                  $('#response').css({
                    "display": "flex",
                    "justify-content": "center",
                    "color": "red",
                    "font-size": "larger"
                  })  
                }
              })
      	    }
      	  })
        })
        $("#to_do tbody").on('click','#remove',function(){
          const classes = this.className.split(' ');
          const index = classes[4].charAt(3);
          const row = classes[5];
          var $row = $(this).closest("tr"),
          $tds = $row.find("td");
          let item = '';
          $.each($tds, function(){
            if(this.cellIndex == index){
              const rowValue = document.getElementById(row);
              const cells = rowValue.getElementsByTagName('td');
              switch(index){
                case "0" :
                  cells[0].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  item = $(this).text();
                  break
                case "1" :
                  cells[1].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  item = $(this).text();
                  break;
                case "2" :
                  cells[2].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  item = $(this).text();
                  break;
                case "3" :
                  cells[3].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  item = $(this).text();
                  break;
                case "4" :
                  cells[4].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  item = $(this).text();
                  break;
                case "5" :
                  cells[5].innerHTML = '';
                  item = $(this).text();
                  break;
                case "6" :
                  cells[6].innerHTML = `<div class="display1">${$(this).text()}</div`;
                  item = $(this).text();
                  break;
              } 
              $.ajax({
                type : 'DELETE',
                url : `${baseURL}/delete`,
                xhrFields: { withCredentials: true },
                data : {date : week[index], day : index,
                  item
                },
                success : function(data){
                },
                error:function(data) {
                  $("#response").text(data.responseText);
                  $('#response').css({
                    "display": "flex",
                    "justify-content": "center",
                    "color": "red",
                    "font-size": "larger"
                  })  
                }
               })
            }
          })
        })
      }
    })
  	}else{
      $("#message").text("Date should be greater than or equal to the current date");
      $('#message').css({
          "display": "flex",
          "justify-content": "center",
          "color": "red",
          "font-size": "larger"
      })
  	}
  }else{
  	$("#message").text("Date should be from the current week");
      $('#message').css({
          "display": "flex",
          "justify-content": "center",
          "color": "red",
          "font-size": "larger"
      })
  }
}