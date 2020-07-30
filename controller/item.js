var fs = require('fs');
var jsonData = JSON.parse(fs.readFileSync(__dirname+'/../public/datasource.json','utf-8'));

const item = {};

item.getItems = async(req,res) =>{
  console.log('Get item');
  return res.status(200).send(jsonData);
}

item.addItem = async(req,res) =>{
 console.log('Add item');

 const { day, item, date } = req.body;

 if(!day || !date ||!item){
 	return res.status(400).send('Mandatory data missing')
 }
 const objItem = {};
 objItem[item] = 'ongoing';
 jsonData[date][day]  = jsonData[date][day] || [];
 jsonData[date][day].push(objItem);
 return res.status(200).send('Success')
}

item.markItemAsDone = async(req,res) =>{
 console.log('Mark item as done');

 const { day, item, date } = req.body;

 if(!day || !date ||!item){
 	return res.status(400).send('Mandatory data missing')
 }
 const objItem = {};
 objItem[item] = 'completed';
 jsonData[date][day]  = jsonData[date][day] || [];
 for(let i=0;i<jsonData[date][day].length;i++){
 	const key = Object.keys(jsonData[date][day][i])[0];
 	if(key === item){
      jsonData[date][day][i][key] = 'completed';
 	}
 }
 return res.status(200).send('Success')
}

item.deleteItem = async(req,res) =>{
 console.log('Delete item');

 const { day, item, date } = req.body;

 if(!day || !date ||!item){
 	return res.status(400).send('Mandatory data missing')
 }
 const newList = [];
 jsonData[date][day]  = jsonData[date][day] || [];
 for(let i=0;i<jsonData[date][day].length;i++){
 	const key = Object.keys(jsonData[date][day][i])[0];
 	if(key === item){
 	  delete jsonData[date][day][i];
 	  break;
 	}
 }
 for(let i=0;i<jsonData[date][day].length;i++){
 	if(jsonData[date][day][i]){
 	  const key = Object.keys(jsonData[date][day][i])[0];
 	  newList.push(jsonData[date][day][i])
 	}
 }
 jsonData[date][day] = newList;
 return res.status(200).send('Success')
}
module.exports.item = item;