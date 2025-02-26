# DIU21
Prácticas Diseño Interfaces de Usuario 2020-21 (Tema: Turismo) 

Grupo: DIU2_Matarratas.  Curso: 2020/21 
Updated: 13/3/2021

Proyecto: TourGraná 

Descripción: 

La aplicación móvil a desarrollar trata de una plataforma insitucional para realizar turismo sobre la ciudad de Granada. La plataforma pondrá en contacto a las diferentes partes: Usuarios, profesionales y establecimientos, para una mayor facilidad de organización. Los usuarios tendrán la ventaja de poder realizar turismo con ventajas si se realiza en grupos de personas, disponiendo así de un costo menor. Los profesionales licenciados en turismo, tendrán beneficio tanto económico como de experiencia. Los establecimientos reciben el beneficio de la promoción por parte de la aplicación y además se podrán ofrecer a cambio de algún beneficio sus establecimientos para la realización de alguna actividad cultural.

Logotipo: 

![Logotipo](P3/imgs/logotipo.png)

Miembros
 * :bust_in_silhouette:   Raúl Rodríguez Pérez -  https://github.com/raulrguez09    :octocat:     
 * :bust_in_silhouette:  Raúl Castro Moreno - https://github.com/Rullencastro    :octocat:

----- 

# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----
Nuestra tarea consiste en comparar las diversas webs que estan relacionadas con las actividades turísticas en Granada. Por ello una vez teníamos el objetivo en mente, encontramos las siguientes páginas web: [granadatur](http://www.granadatur.com/), [turgranada](https://www.turgranada.es/), [granada_info](https://granadainfo.com/), [guias_granada](https://www.guiasgranada.com/). 

Tras esto, pasamos a realizar un breve y conciso análicis a dichas plataformas. Esto consistía en realizar algunas funciones que nosotros considerábamos básicas como, buscar hotel en el centro de granada, buscar una ruta de tapas, encontrar información sobre el corpus, etc. A continuación, gracias a esta primera toma de contacto con las páginas decidimos escoger la web de "Granadatur", debido a que la veíamos como una web con más errores que las demás, asi que podríamos sacarle mas pártido en el análisis. Por último, realizamos un análicis mucho mas profundo que puede consular [aquí](https://github.com/raulrguez09/DIU21/tree/master/P1).

![Método UX](img/Persona.png) 1.b Persona
-----

* Hemos creado a [Pablo](P1/pablo.png), porque queríamos tener el caso de una persona mayor sin experiencia en viajar, y así mostrar lo que le cuesta a una persona que no sabe mucho al respecto, el hecho de reservar viajes, alojamientos, visitas guiadas, etc.

* Hemos creado a [Mei](P1/mei.png), para tener el caso de una persona extranjera, que no entiende el idioma del lugar al que quiere viajar y presentar las dificultades que hay por el no correcto entendimiento.

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

* [La visita de Pablo](P1/pabloMap.png) Está si es una experiencia de usuario realmente habitual, cuando una persona visita a sus hijos en otra ciudad y aparte de ello, aprovechan la ocasión para realizar turismo en ese lugar.

* [La ambición de Mei](P1/meiMap.png) Muestra un viaje de turismo a Granada de una persona extranjera, quizás la razón por la que lo hace no es muy habitual, pero lo que son los sucesos para realizarlo si lo considero habitual.

![Método UX](img/usabilityReview.png) 1.d Usability Review
----
Revisión de usabilidad: (toma los siguientes documentos de referncia y verifica puntos de verificación de  usabilidad
  - Enlace del documento: [Usability_review](https://github.com/raulrguez09/DIU21/blob/master/P1/Usability-review-GRANADATUR.pdf)
  - Valoración final: 56
  - Comentario sobre la valoración: 

En general la web no cumple con las principales características y metas que se persiguen. La estructuración no es buena y el diseño es poco atractivo. La información que se muestra es suficiente, pero el apoyo visual con imágenes o videos es escaso. Además uno de los grandes problemas de la web son los tiempos de carga, estos son muy elevados y afectan en gran medida a la experiencia del usuario. Por otro lado la función de búsqueda esta muy mal diseñada, sin posibilidad para filtrar, ni mensajes de error al buscar cosas sin sentido. Aún asi, la web presenta un menu desplegable donde se muestran las principales actividades, que resulata bastante intuitivo. En conclusión, una vez vistas las web's de la competencia, pensamos que 'Granadtur' es una plataforma poco recomendable, con una experiencia de usuario bastante mala, por lo que, recomendamos el uso de otras webs para cumplir las metas expuestas. 



## Paso 2. UX Design  


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid 
----
En este punto hemos realizado una malla receptora de información. En dicha malla hemos recopilado las buenas características de la web que analizamos en la practica 1, las dificultades que encontraron nuestros usuarios, algunas sugerencias para implementar nuevas funcionalidades y, por último, una crítica constructiva centrándonos en los errores que hemos analizado e ideas aportadas por los desarrolladores.

Para ver la malla receptora de información [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P2)

![Método UX](img/ScopeCanvas.png) 2.b Propuesta de valor y ScopeCanvas
----

* TourGraná

La aplicación móvil a desarrollar trata de una plataforma insitucional para realizar turismo sobre la ciudad de Granada. La plataforma pondrá en contacto a las diferentes partes: Usuarios, profesionales y establecimientos, para una mayor facilidad de organización. Los usuarios tendrán la ventaja de poder realizar turismo con ventajas si se realiza en grupos de personas, disponiendo así de un costo menor. Los profesionales licenciados en turismo, tendrán beneficio tanto económico como de experiencia. Los establecimientos reciben el beneficio de la promoción por parte de la aplicación y además se podrán ofrecer a cambio de algún beneficio sus establecimientos para la realización de alguna actividad cultural.

Para ver el ScopeCanvas [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P2)


![Método UX](img/Sitemap.png) 2.b Tasks analysis 
-----
Hemo creado una matriz de tareas/usuarios (User/task matrix) para analizar los usuarios que van a usar la aplicación y las tareas principales para poder analizar la frecuencia de uso de las acciones y así poder situar las funcionalidades en la aplicación. En dicha matriz se enumeran la lista de tareas, como por ejemplo, iniciar sesión, registarse, reservar un hotel, activar modo oscuro... y los perfiles de usuario como la población nacional/internacional, los establecimientos... Dentro de esto, se indica en cada caso frecuencia de uso (Baja/Media/Alta).

Para ver la user/task matix [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P2)


![Método UX](img/labelling.png) 2.c IA: Sitemap + Labelling 
----
Hemos propuesto una organización lógica de la navegación y los elementos de diseño de nuestra aplicación. Generando un "sitemap" junto con el etiquetado "labelling" del sitio (incluyendo iconos). Para una mayor comodidad se ha creado una jerarquía principal para tener una vista principal, ya en el siguiente paso se detallará con mas enfacis los apartados secundarios.

Para ver el sitemap y el labelling [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P2)

![Método UX](img/Wireframes.png) 2.d Wireframes
-----
Para esta parte hemos desarrollado una serie de bocetos sobre el diseño del layout para Web/movil de nuestra aplicación. Dicha aplicación se ha diseñado de tal forma que se pueda llevar a cabo su implementación tanto en android o ios.

Para ver los bocetos de la interfaz  [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P2)

## Paso 3. Mi UX-Case Study (diseño)


![Método UX](img/moodboard.png) 3.a Moodboard
-----

Hemos planteado el Diseño visual utilizando una guía de estilos (moodboard) utilizando la página de [Padlet](https://padlet.com/).
Para diseñar el logotipo de nuestra aplicación, hemos usado como herramienta [WIX](https://es.wix.com/) que es una plataforma de desarrollo web, la cuál, te puede crear automaticamente logotipos contestando una serie de preguntas, o puedes crearlo tu a mano con las herramientas que de da. Nosotros lo hicimos a mano, escogiendo la paleta de colores, un icono que represente la Alhambra, ya que es un símbolo muy representativo de Granada,y también la fuente con la cuál se escribre el nombre de la app. En nuestro caso si se podría usar como cabecera de Twitter.

Para ver la Moodboard realizada [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P3)



![Método UX](img/landing-page.png)  3.b Landing Page
----

Hemos planteado una Landing Page de manera que consiga la atracción del público objetivo, constando de usuarios que quieran conocer las actividades turísticas de granada, usando un título y subtítulo motivadores y llamativos, con una imagen atrayente y un CTA incitador.

![Landing Page](P3/imgs/landing_page.png) 

![Método UX](img/guidelines.png) 3.c Guidelines
----

Basado en lo estudiado en clase y con ayuda de la página de [Mobbin](https://mobbin.design/patterns/), hemos seleccionado unos patrones de diseño, los cuáles se adaptan perfectamente tanto a lo que necesitamos como a lo que buscamos.

Para consultar los patrones de diseño seleccionados [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P3)

![Método UX](img/mockup.png)  3.d Mockup
----

Hemos desarrollado unos 5 mockups, en los cuáles se implementan todos los patrones de diseño que hemos seleccionado antes, y aplicando todos los estilos visuales basado en el Moodboard que hemos creado al principio.

Para consultar los mockups realizados [pulse aquí](https://github.com/raulrguez09/DIU21/tree/master/P3)


![Método UX](img/caseStudy.png) 3.e ¿My UX-Case Study?
-----

Para publicar nuestro UX-Case Study, hemos realizado un vídeo de unos 3 min aproximadamente, explicando el proceso de nuestro caso de estudio.

Para ver el vídeo accede al siguiente link(solo cuentas UGR):  https://drive.google.com/file/d/12OhtLHe4xZZKN48ny_6Uap1PHJHwGE0P/view?usp=sharing



## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Caso asignado
----


>>> Breve descripción del caso asignado con enlace a  su repositorio Github


![Método UX](img/usability-testing.png) 4.b User Testing
----

>>> Seleccione 4 personas ficticias. Exprese las ideas de posibles situaciones conflictivas de esa persona en las propuestas evaluadas. Asigne dos a Caso A y 2 al caso B
 

| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | TestA/B
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| User1's name  | H / 18   | Estudiante  | Media       | Introvertido | Web.       | A 
| User2's name  | H / 18   | Estudiante  | Media       | Timido       | Web        | A 
| User3's name  | M / 35   | Abogado     | Baja        | Emocional    | móvil      | B 
| User4's name  | H / 18   | Estudiante  | Media       | Racional     | Web        | B 


![Método UX](img/Survey.png). 4.c Cuestionario SUS
----

>>> Usaremos el **Cuestionario SUS** para valorar la satisfacción de cada usuario con el diseño (A/B) realizado. Para ello usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx) para calcular resultados sigiendo las pautas para usar la escala SUS e interpretar los resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)

>>> Adjuntar captura de imagen con los resultados + Valoración personal 


![Método UX](img/usability-report.png) 4.d Usability Report
----

>> Añadir report de usabilidad para práctica B (la de los compañeros)



>>> Valoración personal 


## Paso 5. Evaluación de Accesibilidad  


![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report 
----

>>> Indica qué pretendes evaluar (de accesibilidad) sobre qué APP y qué resultados has obtenido 

>>> 5.a) Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 
>>> 5.b) Uso de simuladores de accesibilidad 

>>> (uso de tabla de datos, indicar herramientas usadas) 

>>> 5.c Breve resumen del estudio de accesibilidad (de práctica 1) y puntos fuertes y de mejora de los criterios de accesibilidad de tu diseño propuesto en Práctica 4.



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  













