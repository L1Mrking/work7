let button = document.getElementById("submit")
button.addEventListener('click',() =>{
    ajaxGet()
})

let msg ={
    name:"李江孟",
    di:2019211285
}

function ajaxGet(){
    alert('请求已发送')

    const xhr = new XMLHttpRequest()
    xhr.open("GET","http://39.107.142.107:3000/mock/25/getText")
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(JSON.stringify(msg))

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 ){
            if (xhr.readyState === 200){
                console.log(this)
                console.log('请求成功')
            } else {
                console.log('请求成功')
            }
        }
    }
    xhr.onload = function(){
        console.log(xhr.response)
    }
}