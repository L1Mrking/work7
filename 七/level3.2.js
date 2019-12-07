let button = document.getElementById("submit")
button.addEventListener('click',() => {
    alert('请求已发送')
    postJSON('http://39.107.142.107:3000/mock/25/testPost',true)
    .then(function(json){
        console.log(json)
    },function(error){
        console.error('出错了',error)
    })
})

let msg={
    name:"李江孟",
    id:2019211285
}

const postJSON = function (url) {
    const promise = new Promise(function (resolve,reject){

        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if(this.status === 200) {
                console.log('请求成功');
                resolve(this.response);
            } else {
                console.log('请求失败');
                reject(new Error(this.statusText))
            }
        }
        const xhr = new XMLHttpRequest()
        xhr.open("POST",url)
        xhr.onreadystatechange = handler
        xhr.responseType = "json"
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.send(JSON.stringify(msg))
    })
    return promise;
}