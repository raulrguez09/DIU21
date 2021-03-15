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
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
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
                touch2: "Movil",
                feel2: "2",
                con2: "Salen demasiadas páginas e información, y al no tener experiencia, no sabe elegir bien cual le viene mejor",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento cercano a la Alhambra, debido a que el piso de su hija esta cerca.",
                touch3: "móvil (el tiempo)",
                feel3: "3",
                con3: "Está preocupado por el coste y por si hay plazas de aparcamiento",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su exmujer le recomienda una página web para obtener ofertas de turismo y hotel juntas",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, observando precios y distancias, y comprobando si hay plazas de aparcamiento cercano",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra 2 hoteles que cumplen que sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "1",
                con5: "No ve que desde la misma página pueda reservar el hotel, por lo que tiene que entrar a la página web de dicho hotel",
                ima5: "cartoon-looking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva el hotel más barato",
                touch6: "ordenador",
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
				Name: "Monica Suarez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



