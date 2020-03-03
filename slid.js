var carousel = document.querySelector(".carousel");
var position = 0
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
    rotate(45)

})
next.addEventListener("click", function () {
    rotate(-45)
    
})
function rotate(direction){
    position+=direction;
    carousel.style.transform = "rotateY("+position+"deg)";
}
function auto() {
    setTimeout(function () {
        rotate(-45);
        auto();
    },4000);
}

auto();

var recettes = [
    {
        titre: "yakiudon", 
        page: "yakiudon.html",
        image: "yakiudon.jpg",
        description: "Fraîche, très parfumée, savoureuse au mille saveurs tout autant que simple, telle est la salade niçoise. A consommer sans modération en été, pour profiter des bons produits frais.",
        personnes: 4,
        temps: 28,
        difficulte: 0,
        cout: 1,
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "yakibuta", 
        page: "yakibuta.html",
        image: "yakibuta.jpg",
        description: "Servir avec une salade verte.",
        personnes: 6,
        temps: 50,
        difficulte: 0,
        cout: 1, 
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "donburi", 
        page: "donburi.html",
        image: "donburi.jpg",
        description: "Fraîche, très parfumée, savoureuse au mille saveurs tout autant que simple, telle est la salade niçoise. A consommer sans modération en été, pour profiter des bons produits frais.",
        personnes: 4,
        temps: 28,
        difficulte: 0,
        cout: 1,
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "agedashi-dofu", 
        page: "agedashi-dofu.html",
        image: "agedashi-dofu.jpg",
        description: "Servir avec une salade verte.",
        personnes: 6,
        temps: 50,
        difficulte: 0,
        cout: 1, 
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "sushi", 
        page: "sushi.html",
        image: "sushi.jpg",
        description: "Fraîche, très parfumée, savoureuse au mille saveurs tout autant que simple, telle est la salade niçoise. A consommer sans modération en été, pour profiter des bons produits frais.",
        personnes: 4,
        temps: 28,
        difficulte: 0,
        cout: 1,
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "tonjiru", 
        page: "tonjiru.html",
        image: "tonjiru.jpg",
        description: "Servir avec une salade verte.",
        personnes: 6,
        temps: 50,
        difficulte: 0,
        cout: 1, 
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "miso", 
        page: "miso.html",
        image: "miso.jpg",
        description: "Fraîche, très parfumée, savoureuse au mille saveurs tout autant que simple, telle est la salade niçoise. A consommer sans modération en été, pour profiter des bons produits frais.",
        personnes: 4,
        temps: 28,
        difficulte: 0,
        cout: 1,
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "chirashi", 
        page: "chirashi.html",
        image: "chirashi.jpg",
        description: "Servir avec une salade verte.",
        personnes: 6,
        temps: 50,
        difficulte: 0,
        cout: 1, 
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
];

var html = "";
var len = recettes.length;

for(var i = 0; i < len; i++) {

    html += "<article class=\"card\" id=\"rec"+ i + "\">" + "<img src=\"" + recettes[i].image + "\"><div class=\"text\"><h2>" + recettes[i].titre + "</h2><p>" +recettes[i].description +"</p></div></article>";
}/*html += "<article class=\"card\" id=\"rec"+ i + "\">" + "<img src=\"" + recettes[i].image + "\"><div class=\"text\"><h2>" + recettes[i].titre + "</h2><p>" +recettes[i].description +"</p></div></article>";*/

var liste = document.getElementById("cadre");
liste.innerHTML = html;


/* Fonctionnalité modale */

var container = document.getElementById("rec_container");
console.log(container);
container.addEventListener("click", (event) => {
    console.log(event);
    container.style.display = "none";
});

var elems = document.getElementsByClassName("card");
console.log(elems);
var len = elems.length;
for(var i = 0; i < len; i++) {
    console.log(elems[i]);
    elems[i].addEventListener("click", (event) => {
        event.preventDefault();
        container.style.display = "block";
        var index = parseInt(event.target.id.substring(3));
        showRecette(index);
    });
}

function showRecette(index) {
    
    var element = document.getElementById('recette');

    var recetteHtml = "";
    recetteHtml += "<img src=\"" + recettes[index].image + "\">";
    recetteHtml += "<div class=\"description\">";
    recetteHtml += "<h2>" + recettes[index].titre + "</h2>";
    recetteHtml += "<p>" + recettes[index].description + "</p>";
    recetteHtml += "<table><tr><th>Personnes</th><th>Temps</th><th>Difficulté</th><th>Coût</th></tr><tr>";
    recetteHtml += "<td>" + recettes[index].personnes + "</td>";
    recetteHtml += "<td>" + recettes[index].temps + "</td>";
    recetteHtml += "<td>" + recettes[index].difficulte + "</td>";
    recetteHtml += "<td>" + recettes[index].cout + "</td>";
    recetteHtml += "</tr></table>";
    recetteHtml += "</div><div class='contenu'><div class='ul'><h2>Ingrédients</h2>";
    recetteHtml += formatLst(recettes[index].ingredients, "ul");
    recetteHtml += "</div><div class='ol'><h2>Etapes</h2>";
    recetteHtml += formatLst(recettes[index].etapes, "ol");
    recetteHtml += "</div></div>";

    element.innerHTML = recetteHtml;
}

function formatLst(strToTab, type) {

    var tab = strToTab.split("///");
    var listHtml = "<" + type + ">";
    var max = tab.length;
    for(var i = 0; i < max; i++) {
        listHtml += "<li>" + tab[i] + "</li>";
    }

    listHtml += "</" + type + ">";
    
    return listHtml;
}