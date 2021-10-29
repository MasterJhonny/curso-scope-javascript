const person = () => {
    let saveName = "name"
    return {
        getName: () => console.log(saveName),
        setName: (name) => saveName = name 
    }
}

let persona1 = person()

persona1.getName()
persona1.setName("Oscar")
persona1.getName()
