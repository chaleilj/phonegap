//ETAPE1 DECLARATION DES VARIABLES

var dab={}; //dab est un objet vide qui contient mon code
dab.somme=0;
//valeur des billets que l'on trie du plus brand ua plus petui
dab.tableauBillets=[500,200,100,50,20,10,5];
dab.tableauImages=
["<img src='media/images/euros-500.jpg>",
"<img src='media/images/euros-200.jpg>",
"<img src='media/images/euros-100.jpg>",
"<img src='media/images/euros-50.jpg>",
"<img src='media/images/euros-20.jpg>",
"<img src='media/images/euros-10.jpg>",
"<img src='media/images/euros-5.jpg>"
];


//ETAPE 2 DECLARATION DES FONCTIONS
dab.demarrage=function()
{
	alert("page prête");
	//instalation des evenements
	jQuery("#boutonRetrait").on("click",dab.retirerBillets);
}

dab.retirerBillets=function()
{;
	
	alert("tu as cliqué")
	dab.somme=jQuery("input#retrait").val();
	alert(dab.somme);

	//il faut distribuer les billets
	//il faut boucler pour parcourir les tableaux
	compteur=0;
	jQuery("#resultat").html("")
	while(compteur<dab.tableauBillets.length)
	{billetEncours=dab.tableauBillets[compteur];
		alert('combiend e billet' + billetEncours);
		nbBillets=Math.floor(dab.somme/billetEncours); //math floor est l'arrondi inferieure
		alert(nbBillets);
		compteurBillets=0;

		while(compteurBillets<nbBillets)
		{
			//afficher le billet
			jQuery("#resultat").append(dab.tableauImages[compteur]);
			compteurBillets=compteurBillets+1
		}


		// enlever la somme distribuée
		//dab.somme=dab.somme-nbBillets*billetEncours;
		dab.somme=dab.somme%billetEncours;
		//ajouter 1 au compteur
		compteur=compteur+1
	}
}
//ETAPE 3 ACTIVATION DU CODE
jQuery(dab.demarrage)