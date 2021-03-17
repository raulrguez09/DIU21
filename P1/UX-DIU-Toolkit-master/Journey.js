/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.Matarratas";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/raulrguez09/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Pablo José Torres",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a Granada para visitar a su hija y hacer turismo de paso",
                touch1: "Calendario",
                feel1: "4",
                con1: "Buscar a alguien que le sustituya durante 3 días en la panadería",
                ima1: "cartoon-shaking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas de turismo para esas fechas",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Salen demasiadas páginas e información, y al no tener experiencia, no sabe elegir bien cual le viene mejor",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento cercano a la Alhambra, debido a que el piso de su hija esta cerca.",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Está preocupado por el coste y por si hay plazas de aparcamiento",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su exmujer le recomienda una página web para obtener ofertas de turismo y hotel juntas",
                touch4: "Movil",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, observando precios y distancias, y comprobando si hay plazas de aparcamiento cercano",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra 2 hoteles que cumplen que sus preferencias",
                touch5: "Ordenador",
                feel5: "1",
                con5: "No ve que desde la misma página pueda reservar el hotel, por lo que tiene que entrar a la página web de dicho hotel",
                ima5: "cartoon-looking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva el hotel más barato",
                touch6: "Ordenador",
                feel6: "2",
                con6: "Todavia le queda por buscar un plan turístico que hacer durante su estancia en Granada ",
                ima6: "cartoon-PCcrying.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Mei Ling",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Realizar un viaje gastronómico por Granada, para descubrir los sabores del Meditarráneo",
                touch1: "Calendario",
                feel1: "5",
                con1: "Necesita esperar a un periodo de vacaciones para poder realizarlo sin preocupaciones",
                ima1: "cartoon-writting2.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "3",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, no tienen ningún viaje acorde a lo que pide, pero dice que le llamaran si aparece algo interesante",
                ima2: "cartoon-speaking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "La agencia no le da una solucion a lo que busca y decide buscarlo ella misma",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Ni ella ni sus padres han viajado nunca a España y no sabe que sitios mirar",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "El padre tiene un amigo español, y este les recomienda una página web",
                touch4: "Móvil",
                feel4: "4",
                con4: "La página web no está adaptada a su idioma, y no entiende mucho de español",
                ima4: "cartoon-phoning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Con la ayuda de un traductor web, consigue mirar los tours gastronómicos disponibles",
                touch5: "Ordenador",
                feel5: "1",
                con5: "Tiene problemas con la estructura de la página porque no encuentra fácilmente lo que busca",
                ima5: "cartoon-PCangry.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue una ruta que se adapte a lo que busca",
                touch6: "Ordenador",
                feel6: "3",
                con6: "Puesto que no está adaptada a su idioma, no está muy segura de lo que ha encontrado",
                ima6: "cartoon-PCtyping.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



