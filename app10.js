let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getImage();
  console.log(link);
  let img = document.querySelector("#output");
  img.setAttribute("src", link);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("error found", e);
    return "No image Found";
  }
}

// btn.addEventListener("click", async () => {
//   let fact = await getfact();
//   console.log(fact);
//   let p = document.querySelector("#output");
//   p.innerText = fact;
// });

// async function getfact() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("error found", e);
//     return "No Fact Found";
//   }
// }

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data1 :", data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data2) => {
//     console.log("Data 2 :", data2.fact);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("i am happy");

// async function getfact() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   } catch {
//     console.log("error found");
//   }
// }
