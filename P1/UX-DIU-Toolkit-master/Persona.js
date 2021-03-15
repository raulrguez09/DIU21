/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.Matarratas";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Pablo José Torres",
				Photo: "man.png",
				Quote: "Pecuniae Omnia Parent",
				Age: 49,
				Occupation: "Panadero",
				Family: "Soltero",
				Location: "Alicante (Pilar de la Horadada - ESPAÑA)",
				Character: "No tener preocupaciones",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Disfrutar de una cerveza viendo la tele", "Ser empresario, de una cadena de panaderías"],
				Frustrations: ["Le gustaria viajar, pero le incomoda salir de su zona de confort", "Le gustaría probar comidas nuevas y gourmet"],
				Bio: "Es de Murcia, pero vino a vivir Pilar de la Hordada, cuando al no entrar en la carrera, una amiga de su madre le encontró un trabajo de panadero en su pueblo",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Lleva bastantes años, sintiendo un agobio, y sentimiento de estar confinado",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Mei Ling",
				Photo: "woman.png",
				Quote: "Memento Mori",
				Age: 19,
				Occupation: "Estudiante",
				Family: "Padres y un hermano pequeño",
				Location: "Sichuan (Chengdu - CHINA)",
				Character: "Descubrir cualquier cultura de los rincones del mundo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Aprender español", "Heredar la empresa familiar del restaurante", "Tener pareja", "Tirarse en paracaídas"],
				Frustrations: ["Sentir decepción por parte de su familia", "Ser muy timida con las personas", "Lo caro que es una academia de español"],
				Bio: "Mei, la cual su familia tiene una empresa familiar de restaurantes, siente que que puede ayudar a su familia impulsando el negocio de sus padres, aprendiendo idiomas de los turistas que vienen a comer, uno de ellos es el Español, puesto que muchos visitantes son de Granada",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Ir a Granada y aprender español, a la vez que ve como funcionan los restaurantes de la ciudad" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])