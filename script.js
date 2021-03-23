var wrap = document.body.querySelector(".wrapper")

var counter = 5

var numberEle = document.createElement("h1");
numberEle.innerHTML = "Counter: " + counter;



var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (var i = 0; i<list.length; i++){
  if(list[i].age>0){
    var ele = document.createElement("div");
    var nameElement = document.createElement("h2");
    var ageElement = document.createElement("h2");
    if(list[i].age>25){
      ele.style.color="green"
    }
  }
  nameElement.innerHTML = "Name: " + list[i].name;
  ageElement.innerHTML = "Age " + list[i].age
  ele.appendChild(nameElement);
  ele.appendChild(ageElement);
  document.body.appendChild(ele)
  wrap.appendChild(ele)
}

function increaseValue(value){
  counter = counter + 1
  numberEle.innerHTML = "Counter: " + counter;
}

document.body.querySelector(".button").addEventListener("click", function(){
  increaseValue(5)
})


numberEle.style.color = "red"
ele.appendChild(numberEle)