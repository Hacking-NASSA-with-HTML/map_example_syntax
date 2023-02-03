// console.log("Hi!")
const root = document.getElementById('root')
const projects = ['firstProject', 'secondProjectMegaCoolAndLong', 'thirdProject']


function prepareProjects() {

    const tags = []

    projects.map(project => {
        if (project.length > 20) {
            const paragraph = document.createElement("p")
            const br = document.createElement("br")
            paragraph.innerText = project
            paragraph.appendChild(br)
            tags.push(paragraph)
        } else {
            const span = document.createElement("span")
            const br = document.createElement("br")
            span.innerText = project
            span.appendChild(br)
            tags.push(span)
        }
    })
    console.log(tags)

    root.innerHTML = tags.map(tag => {
        // return tag.innerText
        return tag.innerHTML
    })
    return tags
}

prepareProjects(projects)
