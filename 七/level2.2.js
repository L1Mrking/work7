let msg = {
    name:"李江孟",
    id:2019211285
}

let button = document.getElementById("submit")
button.addEventListener('click',() => {
    alert('请求已发送')

    fetch('http://39.107.142.107:3000/mock/25/getText',{
        method:'GET',
        headers:{
            'content-type':'application/json'
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        console.log(myJson)
    })
})