
/**
 cisse fousseni
 style.css
 20/10/2020
 */



var playerPlay = true;
var endGame = false;
var IAWin = false;
var playerWin = false;
var idCase;
var pionachecker;
var pionajouer;
var IAplayed = false;
var clicks = 0;
var caseContent = new Array('');
/*var CanWin = false;*/


function play(idCase)
{
    var isfull = false;

    if (endGame == false)
    {
        IAplayed = false;
        /*alert('function play ok');*/
        var contenuCase = document.getElementById(idCase).textContent;
        if(/*contenuCase != "O" && contenuCase != "X"*/contenuCase == '')
        {
            document.getElementById(idCase).innerHTML = "X";
            endGame = checkVictory('X');
            isfull = verifPlateauPlein();
        }
        else
        {
            return;
        }
        if (isfull == false && endGame == false)
        {
            playerPlay = false;
            IAplay();
            isfull = verifPlateauPlein();
            endGame = checkVictory('O');
            playerPlay = true;
        }
    }
};

function IAplay()
{
    var caseContent = new Array('');
    var i;
    var coinvides = new Array();

    /*alert('function IAplay OK');*/

    // récupère le contenu des cases dans un tableau

    for (i = 1; i < 10; i++)
    {
        caseContent.push(document.getElementById('case'+i).textContent);
    }


    // l'IA vérifie si elle peut gagner
    IAplayed = checkWhoCanWin('O', 'O', caseContent);
    // l'IA vérifie si le joueur peut gagner
    if (IAplayed == false)
    {
        IAplayed = checkWhoCanWin('X', 'O', caseContent);
    }
    // si le centre est vide, l'IA joue au centre
    if (document.getElementById("case5").textContent == '' && IAplayed == false)
    {
        document.getElementById("case5").innerHTML = 'O';
        IAplayed =true;
        return;
    }
    // si un des coins est vide, l'IA joue dans un des coins au hasard
    i=1;
    while(i<=9)
    {
        if (document.getElementById('case'+i).textContent=='' && IAplayed == false)
        {
            coinvides.push(i);
        }
        switch(i)
        {
            case 1:
            {
                i=3;
                break;
            }
            case 3:
            {
                i=7;
                break;
            }
            case 7:
            {
                i=9;
                break;
            }
            case 9:
            {
                i++; // permet de sortir de la boucle
                break;
            }
        }
    }
    if (coinvides.length != 0 && IAplayed == false)
    {
        rndm = Math.floor(Math.random() * (coinvides.length-1));
        document.getElementById('case'+coinvides[rndm]).innerHTML = 'O';
        IAplayed = true;
    }
    else // dernière possibilité : l'IA joue au hasard si la case est vide
    {
        while (IAplayed == false)
        {
            rndm = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById('case'+rndm).textContent == '')
            {
                document.getElementById('case'+rndm).innerHTML = 'O' ;
                IAplayed = true;
            }
        }
    }
};

function checkWhoCanWin(pionachecker, pionajouer, caseContent)
{
    /*alert('function checkWhoCanWin OK');*/
    for (i = 1; i < 10; i++)
    {
        if (caseContent[i] == '')
        {
            switch(i)
            {
                case 1: // conditions de victoire si la case 1 est vide
                {
                    if (  (caseContent[2]==pionachecker)&&(caseContent[3]==pionachecker)
                        ||(caseContent[4]==pionachecker)&&(caseContent[7]==pionachecker)
                        ||(caseContent[5]==pionachecker)&&(caseContent[9]==pionachecker))
                    {
                        document.getElementById("case1").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 2: // conditions de victoire si la case 2 est vide
                {
                    if (  (caseContent[1]==pionachecker)&&(caseContent[3]==pionachecker)
                        ||(caseContent[5]==pionachecker)&&(caseContent[8]==pionachecker))
                    {
                        document.getElementById("case2").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 3: // conditions de victoire si la case 3 est vide
                {
                    if (  (caseContent[1]==pionachecker)&&(caseContent[2]==pionachecker)
                        ||(caseContent[6]==pionachecker)&&(caseContent[9]==pionachecker)
                        ||(caseContent[5]==pionachecker)&&(caseContent[7]==pionachecker))
                    {
                        document.getElementById("case3").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 4: // conditions de victoire si la case 4 est vide
                {
                    if (  (caseContent[1]==pionachecker)&&(caseContent[7]==pionachecker)
                        ||(caseContent[5]==pionachecker)&&(caseContent[6]==pionachecker))
                    {
                        document.getElementById("case4").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 5: // conditions de victoire si la case 5 est vide
                {
                    if (  (caseContent[1]==pionachecker)&&(caseContent[9]==pionachecker)
                        ||(caseContent[2]==pionachecker)&&(caseContent[8]==pionachecker)
                        ||(caseContent[3]==pionachecker)&&(caseContent[7]==pionachecker)
                        ||(caseContent[4]==pionachecker)&&(caseContent[6]==pionachecker))
                    {
                        document.getElementById("case5").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 6: // conditions de victoire si la case 6 est vide
                {
                    if (  (caseContent[3]==pionachecker)&&(caseContent[9]==pionachecker)
                        ||(caseContent[4]==pionachecker)&&(caseContent[5]==pionachecker))
                    {
                        document.getElementById("case6").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 7: // conditions de victoire si la case 7 est vide
                {
                    if ((  caseContent[1]==pionachecker)&&(caseContent[4]==pionachecker)
                        ||(caseContent[3]==pionachecker)&&(caseContent[5]==pionachecker)
                        ||(caseContent[8]==pionachecker)&&(caseContent[9]==pionachecker))
                    {
                        document.getElementById("case7").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 8: // conditions de victoire si la case 8 est vide
                {
                    if ( (caseContent[2]==pionachecker)&&(caseContent[5]==pionachecker)
                        ||(caseContent[7]==pionachecker)&&(caseContent[9]==pionachecker))
                    {
                        document.getElementById("case8").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }
                case 9:
                {
                    if (  (caseContent[1]==pionachecker)&&(caseContent[5]==pionachecker)
                        ||(caseContent[3]==pionachecker)&&(caseContent[6]==pionachecker)
                        ||(caseContent[7]==pionachecker)&&(caseContent[8])==pionachecker)
                    {
                        document.getElementById("case9").innerHTML = pionajouer;
                        IAplayed = true;
                        return true;
                    }
                    break;
                }

            }
        }
    }
    return 0;
};

function viderplateau()
{
    window.location.reload();
};

function checkVictory(pion)
{
    var caseContent = new Array('');

    for (i = 1; i < 10; i++) // récupère le contenu des cases
    {
        caseContent.push(document.getElementById('case'+i).textContent);
    }

    if ( ((caseContent[1]==caseContent[2])&&(caseContent[2]==caseContent[3])&&(caseContent[2]==pion)) //horizontal 1
        ||((caseContent[4]==caseContent[5])&&(caseContent[5]==caseContent[6])&&(caseContent[5]==pion)) //horizontal 2
        ||((caseContent[7]==caseContent[8])&&(caseContent[8]==caseContent[9])&&(caseContent[8]==pion)) //horizontal 3
        ||((caseContent[1]==caseContent[4])&&(caseContent[4]==caseContent[7])&&(caseContent[4]==pion)) //vertical 1
        ||((caseContent[2]==caseContent[5])&&(caseContent[5]==caseContent[8])&&(caseContent[5]==pion)) //vertical 2
        ||((caseContent[3]==caseContent[6])&&(caseContent[6]==caseContent[9])&&(caseContent[6]==pion)) //vertical 3
        ||((caseContent[1]==caseContent[5])&&(caseContent[5]==caseContent[9])&&(caseContent[5]==pion)) //diagonal 1
        ||((caseContent[3]==caseContent[5])&&(caseContent[5]==caseContent[7])&&(caseContent[5]==pion))) //diagonal 2
    {
        /*alert("test chckvictory()");*/
        if (pion == 'O')
        {
            alert("Partie terminée\nVous avez perdu !");
            viderplateau();
            return true;
        }
        else if (pion == 'X')
        {
            alert("Bravo! vous avez gagné");
            viderplateau();
            return true;
        }
    }
    else
    {
        return false;
    }
};

function verifPlateauPlein()
{
    var Content = new Array();

    for (i = 1; i < 10; i++) // récupère le contenu des cases
    {
        if (document.getElementById('case'+i).textContent != '')
        {
            Content.push(document.getElementById('case'+i).textContent);
        }
    }
    if (Content.length==9)
    {
        alert("plateau plein");
        viderplateau();
        return true;
    }
    else
    {
        return false;
    }

};

// BACKGROUND
var bckgrnd = document.getElementById("bckgrnd");
var ctx = bckgrnd.getContext("2d");

//met le canevas en plein écran
bckgrnd.height = window.innerHeight;
bckgrnd.width = window.innerWidth;

//des digits pour faire comme dans Matrix
var digit = "01";
//convertit les  string en arrays of single characters
digit = digit.split("");


var font_size = 20;
var columns = bckgrnd.width / font_size; //nombre de colonnes pour la pluie
//un tableau, un caractère, un par colonne
var caractere = [];
//x est la coordonnée en x
var x;
//1 = y coordonnée du caractère(au départ, la même pour chacun des caractères)
for (x = 0; x < columns; x++)
{
    caractere[x] = 1;
}

//tracer les digits
function draw()
{
    var y;
    //background noir pour le canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, bckgrnd.width, bckgrnd.height);

    ctx.fillStyle = "#00ff04"; //texte vert
    ctx.font = font_size + "px arial";

    //boucler
    for(var i = 0; i < caractere.length; i++)
    {
        //un caractère random
        var text = digit[Math.floor(Math.random()*digit.length)];
        //x = i*font_size, y = valeur de caractere[i]*font_size
        y = caractere[i]*font_size;
        ctx.fillText(text, i*font_size, y);


        //on ajoute un peu de random au reset, pour le style
        if(caractere[i]*font_size > bckgrnd.height && Math.random() > 0.975)
            caractere[i] = 0;

        caractere[i]++;
    }
}

setInterval(draw, 33);


// LETTERS ROTATION
( function( $ )
{
    /**
     * span-letters.js
     */
    $.fn.spanLetters = function()
    {
        // parcoure chaque element
        this.each( function()
            {

                var words, i, text;

                // Crée un tableau avec chaque lettre du texte à un indice différent
                words = $( this ).text().split( '' );

                // parcoure les lettres et les place entre eds balises span
                for ( i = 0; i in words; i++ )
                {
                    words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
                };

                // regroupe notre tableau de lettres entourées de span dans un string
                text = words.join( '' );

                // Remplace le string original par le nouveau string
                $( this ).html( text );
            }
        )
    }
}( jQuery ));

// Appelle la fonction soanLetters sur la cible
$( ".rotate-chars" ).spanLetters();

targets = $( ".rotate-chars span" ); // Sélectionne nos spans
duration = 1000; // Durée de l'effet
speed = 100; // vitesse de l'animation entre les lettres
infiniteLoop = false // définit si l'animation doit continuer à se déclencher

// Ajoute la classe d'animation à la lettre, puis la supprime plus tard
function animateLetter( value )
{
    if ( turnedOn )
    {
        $( value ).addClass( "active" );
        setTimeout( function()
            {
                stopAnimateLetter( value );
            }, duration
        );
    }
};

// Supprime la classe animation des lettres
function stopAnimateLetter( value )
{
    $( value ).removeClass( "active" );
};

// déclenche la fonction
function startEverything()
{
    // parcoure la collection de spans
    targets.each( function( index, value )
    {
        // delai entre l'animation de chaque lettre
        timer = setTimeout( function()
        {
            animateLetter( value );
        }, speed * index );
    });

    // ne boucle pas si le déclencheur est un clic
    if ( clicked )
    {

        clicked = false;

    } else
    {
        // Boucle infinie
        if ( infiniteLoop )
        { // Si le bouclage est sur On
            if ( turnedOn )
            { // Si l'animation n'est pas finie
                setTimeout( function()
                {
                    startEverything();
                }, index * speed );
            }
        }
    }
}

// fonction qui arrête tout
function stopEverything()
{
    clearTimeout( timer );
    turnedOn = false;
    // ajoute un delai
    setTimeout( function()
    {
        targets.each( function( index, value )
        {
            stopAnimateLetter( value );
        });
    }, 200 );
}

// Déclenchement souris hover
$( ".rotate-chars" )
    .mouseenter( function()
    {
        turnedOn = true;
        clicked = false;
        startEverything();
    })
    .mouseleave( function()
    {
        stopEverything();
    });

// déclenchement par clic
$( ".rotate-chars" ).on( "click", function()
{
    clicked = true;
    turnedOn = true;
    startEverything();
});


const images = 56

function template(index) {
    return `
        <div class="con-star">
            <i class='bx bx-star'></i>
        </div>
        <div class="con-image">
            <img class="img" src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/${index}.png" alt="">
            <img class="bg" src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/${index}.png alt="">
        </div>

        <div class="con-text">
            <h3>
                Training shoes
            </h3>
            <p>
                The Nike SuperRep Go shoes combine comfortable foam cushioning,
            </p>
        </div>

        <div class="con-price">
            129.99$
        </div>

        <div class="con-btn">
            <Button onclick="handleAdd(event)" class="add">
                Add to cart
            </Button>

            <div class="con-input-btns">
                <Button onclick="plusLess(event, 'less')" class="less">
                    <i class='bx bx-minus' ></i>
                </Button>
                <input value="1" type="text">
                <Button onclick="plusLess(event, 'plus')" class="plus">
                    <i class='bx bx-plus'></i>
                </Button>
            </div>
        </div>
        `
}

for (let index = 1; index < 20; index++) {
    const element = document.createElement('div');
    element.classList.add('card')
    element.innerHTML = template(index)
    document.querySelector('.con-cards-1').appendChild(element)
}
for (let index = 21; index < 40; index++) {
    const element = document.createElement('div');
    element.classList.add('card')
    element.innerHTML = template(index)
    document.querySelector('.con-cards-2').appendChild(element)
}
for (let index = 41; index < 56; index++) {
    const element = document.createElement('div');
    element.classList.add('card')
    element.innerHTML = template(index)
    document.querySelector('.con-cards-3').appendChild(element)
}

function handleAdd(event) {
    const card = event.target.closest('.card')
    card.classList.add('add-active')
    console.log(card)
}

function plusLess(event, type) {
    const card = event.target.closest('.card')
    const input = card.querySelector('input')
    let oldVal = Number(input.value)
    if (type == 'less') {
        if (oldVal == 1) {
            card.classList.remove('add-active')
            return
        }
        input.value = oldVal -= 1
    } else {
        input.value = oldVal += 1
    }
}


