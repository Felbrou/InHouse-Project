/*document.querySelector("input[type='submit']").addEventListener("click", () => {
    alert("Coloque seu e-mail!!!");
});*/


const minhaImagem = document.querySelector("img");

minhaImagem.onclick = () => {
    const minhaSrc = minhaImagem.getAttribute("src");
    if (minhaSrc === "images/zelda.png") {
        minhaImagem.setAttribute("src", "images/zelda-tears.png");
    } else {
        minhaImagem.setAttribute("src", "images/zelda.png");
    }
};