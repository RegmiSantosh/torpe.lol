function getsats(){
  var form = document.getElementById('form')

  form.addEventListener('submit',function(e){

    e.preventDefault()

    var name = document.getElementById('name').value
    var sats = document.getElementById('sats').value

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("apikey", "h1WiYAlcc7OxVcejT5Q8sQBKbL8Hh0mo");

var raw = JSON.stringify({
  "gamertag": name,
  "amount": sats*1000,
  "description": "Thanks for trying out! Regards, Santosh"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.zebedee.io/v0/gamertag/send-payment", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  })
}