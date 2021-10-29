const persona = () => {
    let name = "Name"
    return {
        getName: () => console.log(name),
        setName: (nombre) => name = nombre
    }
}

let juan = persona()
juan.getName()
juan.setName('Juan')
juan.getName()