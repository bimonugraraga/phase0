let playlist = [
  {
    song: "diatasnormal.mp3",
    title: "di atas normal",
    band: "peterpan"
  },
  {
    song: "dragonball.mp3",
    title: "dragon ball",
    band: "goku"
  },
  {
    song: "pejantantangguh.mp3",
    title: "pejantan tangguh",
    band: "sheila on 7"
  },
  {
    song: "wavinflag.mp3",
    title: "wavin flag",
    band: "band4"
  },
  
]

let acak = shuffle(playlist)
acak.push("")


let musik = new Audio()
let index = 0
let count = 0
let totalPoint = 0


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function generateMusic(){
  musik.src = acak[index].song
  musik.play()
}




function nextMusic(){
  let userAnswer = document.getElementById("user-answer").value
  userAnswer=""
  index++

  musik.src = acak[index].song
  musik.play()
 
 

  
  let data = document.getElementById("data")
  data.innerHTML = totalPoint
  if (index === acak.length -1){
    totalPoint = totalPoint
    alert(`HORE\nPoint ${localStorage.getItem("nama")}:` + totalPoint)
    window.location.replace('index.html')
  }
}

function getAnswer(){
  
  let answer = acak[index].title

  let userAnswer = document.getElementById("user-answer").value

  if (!userAnswer){
    alert("Harus diisi")
  } else if (userAnswer.toLowerCase() === answer){
    count = 10
    console.log(answer)
    totalPoint += count
    nextMusic()
    helping.remove()
    

  } else {
    alert(`Jawaban ${localStorage.getItem("nama")} salah \n` + "Point : " + totalPoint)
    window.location.replace('index.html')
    
  }
  
  
  console.log(totalPoint, "Answer")
  
}

let sisaHelp = document.getElementById("helpme")
let parent = document.getElementById("box")
let helping = document.createElement("BUTTON")
let countHelp = 2
function help(){
  let hitungHelp = 0

  if (countHelp > 0){
    // alert(acak[index].band)
    helping.innerHTML = acak[index].band

    if (hitungHelp ===0){
      // document.body.appendChild(helping)
      console.log("HELP")
      parent.appendChild(helping)
      hitungHelp++
    }

    totalPoint -= 5
    console.log(totalPoint, "Help")
    countHelp--

    

  } else{
    alert("HELP HABIS")
  }

  sisaHelp.innerHTML = countHelp
}

function getName(){
  let inputNama = document.getElementById("inputNama")
  let namaPeserta = inputNama.value
  localStorage.setItem("nama", namaPeserta)
  console.log(namaPeserta)
  return namaPeserta
}
function skorAnda(){
  let nameIsi = getName()

}

function play(){
  
  
  window.location.replace('hack2.html')
  getName()
  let peserta = document.getElementById("namaPeserta")
  // peserta.innerHTML = `Score ${name}`
}
