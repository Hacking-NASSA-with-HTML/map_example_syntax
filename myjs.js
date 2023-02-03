// console.log("Hi!")
const root = document.getElementById('root')
const projects = ['firstProject', 'secondProjectMegaCoolAndLong', 'thirdProject'];


function prepareProjects() {

    const tags = [];

    projects.map(project => {
        if (project.length > 20) {
            const para = document.createElement("p");
            const br = document.createElement("br");
            para.innerText = project;
            para.appendChild(br);
            tags.push(para);
        } else {
            const span = document.createElement("span");
            const br = document.createElement("br");
            span.innerText = project;
            span.appendChild(br);
            tags.push(span);
        }
    })
    console.log(tags)

    root.innerHTML = tags.map(tag => {
        // return tag.innerText
        return tag.innerHTML
    })
    return tags;
}

prepareProjects(projects)
