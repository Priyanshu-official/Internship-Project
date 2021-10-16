const add = document.querySelector(".add-standard")
const wrap = document.querySelector(".box-modal")
const moveBox = document.querySelector("#arrow-alt")

/************ Standard Funtion ************/
let id = 1
let count = 0 
add.onclick = function(){
    let contentWrap = document.createElement("div")
    contentWrap.setAttribute("class", "content-wrap")
    contentWrap.setAttribute('id', `row-${id}`)

    contentWrap.innerHTML = ''
    contentWrap.innerHTML = `<div" class="row">

                            <div class="column" style="width:15%">
                                <div class="img-container">
                                    <img id="arrow-alt" src="./assets/img/arrows-alt-solid.svg" class="svg" alt="move" title="move" style="width:20px;">
                                    <img onclick="left(this.id)" id="${id}" class="svg" src="./assets/img/arrow-left-solid.svg" alt="left-arrow" title="Outdent" style="width:20px;">
                                    <img onclick="right(this.id)" id="${id}" class="svg" src="./assets/img/arrow-right-solid.svg" alt="right-arrow" title="Indent" style="width:20px;">
                                    <img onclick="trash(this.id)" id="${id}" class="svg" src="./assets/img/trash-solid.svg" alt="trash" title="Delete" style="width:25px;">
                                </div>
                            </div>
                            <div class="column" style="width:15%; text-indent: 50px;">
                                <div id="column-box-${id}" class="column-box"></div>
                            </div>
                            <div class="column" style="width: 50%;">
                                <form class="form-container" action="">
                                    <input id="input-text-${id}" type="text" placeholder="Type Standard here(e.g Number)">
                                </form>
                            </div>
                        </div>`
    wrap.appendChild(contentWrap)
    id +=1
}

/************ Indent block ************/

function right(id){
    console.log(count)
    let box = document.querySelector(`#column-box-${id}`)
    let inputTxt = document.querySelector(`#input-text-${id}`)
        if(count === 0 ){
            box.style.marginLeft = "0px"
            inputTxt.style.marginLeft = "0px"
            inputTxt.style.color = "#00dddd"
            inputTxt.style.fontSize = "20px"
            count+=1
        }else if(count === 1){
            box.style.marginLeft = "30px"
            inputTxt.style.marginLeft = "30px"
            inputTxt.style.color = "black"
            inputTxt.style.fontSize = "18px"
            count+=1
        }else if(count === 2){
            box.style.marginLeft = "55px"
            inputTxt.style.marginLeft = "55px"
            inputTxt.style.color = "black"
            inputTxt.style.fontSize = "15px"
            count = 0            
        }
}

/************ Outdent block ************/

function left(id){
    // console.log(count)
    let box = document.querySelector(`#column-box-${id}`)
    let inputTxt = document.querySelector(`#input-text-${id}`)
    box.style.marginLeft = "0px"
    inputTxt.style.marginLeft = "0px"
    inputTxt.style.color = "#00dddd"
    inputTxt.style.fontSize = "20px"                

}

function trash(id){
    let myobj = document.querySelector(`#row-${id}`)
    myobj.remove();
}

/************ Movable block ************/








