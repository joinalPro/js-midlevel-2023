const main = document.getElementById('main-container');
const section = document.createElement('section');

section.innerHTML = `
    <h1>My Dynamic Section</h1>
    <p>This is dynamic section paragraph</p>
    <ul>
        <li>ah!</li>
        <li>hehe</li>
    </ul>

`
main.appendChild(section);