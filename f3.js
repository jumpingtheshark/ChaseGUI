

fetch ("http://www.cnn.com")
    .then(res => (res.text()))
    .then (res=> (console.log(res)))
    .then (res=>x=res.text);