// const resp = fetch('https://reqres.in/api/users?page=1')
// //console.log(resp);
// resp.then((response)=>{
//     return response.json();
// })
// .then ((json)=>{
//     console.log(json);
// })

const resp = fetch("https://reqres.in/api/users?page=1");
console.log(resp);
resp
  .then((response) => response.json())
  .then((json) => {
    let content = document.getElementById("container");
    let htmlX = "";
    json.data.forEach((element) => {
      console.log(element);

      let htmlCard = `<div class="card" style="width: 18rem;">
        
        <div class="card-body">
                <img src=" ${element.avatar}"  alt="" width="200px" height="200px">
                <h4>Id: ${element.id}</h2>
                <h4>First name: ${element.first_name}</h2>
                <h5>Email: ${element.email}</h5>
                <h5>Last name: ${element.last_name}</h5>
                <button type="button" data-bs-toggle="modal" data-bs-target="#details" class="btn btn-info center" onclick="findById(${element.id})">Detalles</button>
            </div>
        </div>
      </div> <br> </div>`;
      htmlX = htmlX + htmlCard;
    });
    content.innerHTML = htmlX;
  });

const findById = (id) => {
  fetch("https://reqres.in/api/users/" + id)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data);
      document.getElementById("name").innerHTML = json.data.first_name;
      document.getElementById("last").innerHTML = json.data.last_name;
      document.getElementById("email").innerHTML = json.data.email;
      document.getElementById("avatar").src = json.data.avatar;
    });
};
