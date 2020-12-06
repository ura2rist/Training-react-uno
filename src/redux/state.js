let data = {
	user:[],
	text: 'Имя'
};

let rerenderEntireTree = () => {
	console.log('State');
}

export deleteUser = () = {

}

export let addUser = (name) => {
	let add = {name: name, count: 0};
	data.user.push(add);
	data.text = '';
	rerenderEntireTree(data);
};

export let updateText = (newText) => {
	data.text = newText;
	rerenderEntireTree(data);
};

export let subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default data;