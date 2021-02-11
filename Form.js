class Form{
    constructor(){
        this.title=createElement("h2")
        this.name=createInput("Name")
        this.button=createButton("Play")
        this.greeting=createElement("h3")
    }
    display(){
        this.title.position(150,70)
        this.title.html("BOWLING")
        this.name.position(150,200)
        this.button.position(150,250)
        
    }
}