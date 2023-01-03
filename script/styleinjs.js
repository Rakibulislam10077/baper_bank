let variables = document.getElementsByTagName('section');
for (let variable of variables) {
    variable.style.border = '2px solid steelblue'

}

let container = document.querySelectorAll('section');
for (let cont of container) {
    cont.style.border = '2px solid orange';
    cont.style.margin = '5px 0';
    cont.style.padding = '0 10px';
    cont.style.borderRadius = '15px';
}



let listItem = document.querySelectorAll('li');
for (let list of listItem) {
    list.style.listStyle = 'none';
    list.style.color = 'blueviolet';
    list.style.fontSize = '22px';
}
let allheading = document.querySelectorAll('h1');
for (let heading of allheading) {
    heading.style.color = 'orange';
    heading.style.fontFamily = 'verdana';
}

let container2 = document.querySelectorAll('section');
for (let con of container) {
    con.style.background = 'gray'
}

let demo = document.getElementById('first_section');
demo.style.backgroundColor = 'gray';
demo.classList.add('hublu');