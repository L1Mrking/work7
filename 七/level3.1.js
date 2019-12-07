let msg = {
    name:"李江孟",
    id:2019211285
}

let button = document.getElementById("submit")
button.addEventListener('click',() => {
    alert('请求已发送')
    getJSON('http://39.107.142.107:3000/mock/25/getText')
    .then(function(json){
        console.log(json)
    },function(error){
        console.error('出错了',error)
    })
})

const getJSON = function (url) {
    const promise = new Promise(function (resolve,reject){
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if(this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Errror(this.statusText))
            }
        }
        const xhr = new XMLHttpRequest()
        xhr.open("GET",url)
        xhr.onreadystatechange = handler
        xhr.responseType = "json"
        xhr.setRequestHeader("Accept","application/json")
        xhr.send()
    })
    return promise;
}