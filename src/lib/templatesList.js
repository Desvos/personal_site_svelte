const templatesPaths = import.meta.glob("/src/routes/templates/*/+page.svelte",)

let templatesList = []

for (let path in templatesPaths) {
    let fPath = path.replace("/src/routes/templates/", "")
    let splittedPath = fPath.split("/")
    let folderName = splittedPath[0]

    templatesList.push({
        name: `Template ${folderName}`,
        href: `/${folderName}/`
    })
}


export default templatesList;