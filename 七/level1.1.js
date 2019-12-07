let button = document.getElementById("submit")
button.addEventListener('click',() =>{
    ajaxPost()
})

let msg ={
    name: "李江孟",
    id: 2019211285
}

function ajaxPost(){
    alert('请求已发送')

    const xhr = new XMLHttpRequest()
    xhr.open("post","http://39.107.142.107:3000/mock/25/testPost",true)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(JSON.stringify(msg))

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200){
                console.log(JSON.parse(xhr.responseText))
                console.log('请求成功')
            } else {
                console.log('请求失败')
            }
        }
    }
}