var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
	var peop=[];
	for(let i=0;i<people.length;i++){
		if(people[i]!=personName){
			peop.push(people[i]);
		}
	}
	people=peop;
	return people;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));