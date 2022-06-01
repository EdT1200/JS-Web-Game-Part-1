let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)
let pineTree = document.createElement("img")
greenCharacter.src = 'assets/pine-tree.png'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '450px'
greenCharacter.style.bottom = '200px'
document.body.append(pineTree)
function newImage (item, s, x, y, z){
    item = document.createElement("img")
    item.src = "s"
    item.style.position = "z"
    item.style.bottom = "y"
    document.body.append(item)
    item.addEventListener("dblclick", function())
    item.remove()
})
newImage("greenCharacter", "./assets/green-character.gif", "100px")
function newItem(url, left, bottom){
    .item let = newImage (url, left, bottom)
    item.addEventListener("click", function()){
        item.remove()
        let inventoryItem = document.createElement("img")
        inventoryItem.src = url
        inventoryItem.append(inventoryItem)
    })
}