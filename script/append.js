// const append = document.getElementById('append_text');
// let span = document.createElement('span');
// span.innerText = 'This is a span';
// append.appendChild(span);
// append.style.color = 'blueviolet';
// append.style.fontSize = '22px'

// let creatSection = document.getElementById('main_container');
// let section = document.createElement('section');
// let h1 = document.createElement('h1');
// h1.innerText = 'My Food List'


// let ul = document.createElement('ul');

// let li1 = document.createElement('li');
// li1.innerText = 'biryani';
// ul.appendChild(li1);

// let li2 = document.createElement('li');
// li2.innerText = 'fish';
// ul.appendChild(li2);

// let li3 = document.createElement('li');
// li3.innerText = 'chicken';
// ul.appendChild(li3);

// let li4 = document.createElement('li');
// li4.innerText = 'egg';
// ul.appendChild(li4);

// section.appendChild(h1);
// section.appendChild(ul);

// creatSection.appendChild(section);


let mainContaier = document.getElementById('main_container');
let section = document.createElement('section');
let h1 = document.createElement('h1')
h1.innerText = 'hello javaScript';

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'java';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'pythob';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'c#';
ul.appendChild(li3);


section.appendChild(h1);
section.appendChild(ul);
mainContaier.appendChild(section);





let sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> targeted language</h1>
<ul>
<li>javaScript</li>
<li>python</li>
<li>C#</li>
<li>C++</li>
<li>java</li>
</ul>
`
mainContaier.appendChild(sectionDress);



h1.style.color = 'black';
section.style.border = '5px solid red';
section.style.background = 'orange';
section.style.borderRadius = '15px';
section.style.borderRadius = '15px';
section.style.padding = '10px';



sectionDress.style.border = '5px solid red';
sectionDress.style.background = 'pink';
sectionDress.style.borderRadius = '15px';
sectionDress.style.borderRadius = '15px';
sectionDress.style.padding = '10px';
sectionDress.style.margin = '5px 0';


