![Coderhouse](./images/readme/Coder.png)
# React Js - Comisión 54090
Profesor: Horacio Gutierrez Estevez

Tutor: Joaquín Pontoriero

## Primer Pre-Entrega `ZapaTienda` (ProyectoFinal-Gutierrez)
Estudiante: Federico Gutierrez

![ZapaTienda](./images/readme/Portada.png)

### 1. INTRODUCCIÓN

Horacio y/o Joaquín:

Estoy encantado de compartir los últimos avances del proyecto con vos. Me complace informarte que he agregado todos los archivos JSX necesarios para hacer funcional la web del e-commerce de ventas de zapatillas.
Agradezco enormemente tu tiempo y dedicación para revisar este proyecto. Estoy ansioso por recibir tus comentarios y sugerencias para continuar mejorando el código y hacer que este proyecto sea aún más impresionante. Estoy totalmente abierto a recibir tu retroalimentación y trabajar juntos para ofrecer un producto final excepcional.

¡Estoy emocionado de compartir la presentación contigo! ¡Vamos a por ello!

### 2. FUNDAMENTACIÓN

La decisión de crear un proyecto en React para un e-commerce de zapatillas "ZapaTienda" surgió de la necesidad de combinar una experiencia de usuario fluida con un diseño interactivo y moderno. React es una biblioteca de JavaScript ampliamente reconocida por su capacidad para crear interfaces de usuario dinámicas y eficientes, lo que lo convierte en una elección natural para un proyecto de ecommerce que busca destacarse en la experiencia de compra en línea.

Lo que mas destaco de la utilización de React es su enfoque en la creación de componentes reutilizables. Al diseñar un sitio de e-commerce, es crucial tener componentes que puedan adaptarse fácilmente a diferentes secciones del sitio, como la página de inicio, la galería de productos y el carrito de compras. React permite crear estos componentes de manera modular, lo que facilita la escalabilidad y el mantenimiento del proyecto a medida que este crece.

Además, React ofrece un rendimiento optimizado al utilizar el concepto de Virtual DOM (Document Object Model) que minimiza las actualizaciones en la interfaz de usuario, lo cual es fundamental para garantizar una experiencia de navegación rápida y fluida en un sitio de e-commerce donde los usuarios esperan tiempos de carga mínimos y una navegación intuitiva.

Otro factor importante es la comunidad y el ecosistema de herramientas que rodea a React. Existen numerosas bibliotecas y frameworks complementarios, como React Router para la navegación entre páginas, y librerías de estilos como Styled Components o Material-UI que facilitan la creación de interfaces atractivas y responsivas.

En resumen, la elección para desarrollar un e-commerce de venta de zapatillas se basó en su capacidad para crear una experiencia de usuario excepcional, su enfoque en componentes reutilizables, su rendimiento optimizado y el respaldo de una sólida comunidad de desarrolladores y herramientas complementarias.

### 3. TEGNOLOGÍAS UTILIZADAS

##### a- HTML5 (Hypertext Markup Language 5):
Aunque en React escribimos principalmente JSX para definir la estructura de los componentes, este JSX se compila finalmente en código HTML que el navegador puede entender. Dentro de los componentes de React, utilizamos etiquetas HTML para representar la estructura del contenido, como div, p, ul, li, entre otras.
##### b- CSS3 (Cascading Style Sheets 3):
La presentación visual de una aplicación web desarrollada en React (o cualquier otra tecnología) se controla mediante CSS. Puedes aplicar estilos directamente a los elementos HTML en tus componentes de React utilizando el atributo style de JSX, pero es más común utilizar hojas de estilo separadas.
##### c- JavaScript (ES6+):
React se basa en JavaScript moderno, especialmente en ECMAScript 6 (también conocido como ES6) o versiones posteriores. ES6 introduce características como clases, arrow functions, destructuring, y let/const, que hacen que el código sea más limpio y fácil de mantener.
##### d- JSX (JavaScript XML):
JSX es una extensión de sintaxis que permite escribir HTML dentro de JavaScript. Esta característica es fundamental en React, ya que facilita la creación de componentes de interfaz de usuario de manera declarativa y estructurada.
##### e- Node.js y npm (Node Package Manager):
Node.js es un entorno de tiempo que permite ejecutar JavaScript fuera del navegador. npm es el gestor de paquetes de Node.js que se utiliza para instalar y gestionar las dependencias del proyecto, como bibliotecas de React, herramientas de desarrollo, etc.
##### f- React-Toastify:
Toastify es un paquete gratuito que permite agregar notificaciones a una aplicación React. Se puede usar para mostrar mensajes de "exito", "error", "información" y "cargando".
##### g- React-Router-Dom:
React-router-dom esuna biblioteca específica que se utiliza en proyectos de React para la navegación y gestión de rutas en aplicaciones web de una sola página (SPA, por sus siglas en inglés: Single Page Application).
##### h- Firebase:
Firebase es una plataforma digital de Google para el desarrollo de aplicaciones web y móviles. Su objetivo es facilitar el desarrollo de aplicaciones de alta calidad de forma rápida y eficiente, y mejorar su rendimiento.
##### i- Vercel:
Vercel es una plataforma en la nube que permite a los desarrolladores crear, implementar, desplegar y escalar sitios web y aplicaciones de forma rápida y sencilla.
##### j- Github:
GitHub es una plataforma online de desarrollo de software que permite almacenar, compartir y trabajar en proyectos de software junto con otros usuarios. GitHub utiliza el sistema de control de versiones Git para ayudar a los desarrolladores a almacenar y administrar el código, llevando un registro de cambios.

### 4. LINK A VERCEL

* Ingresa a [vercel](https://zapatienda.vercel.app/). 

### 5. LINK A REPOSITORIO GITHUB

* Ingresa a [Github](https://github.com/fedco-gtz/ProyectoFinal-Gutierrez). 

### 6. LINK A VIDEO, GIF E IMÁGENES

* Para ver el video -> [Google Drive](https://drive.google.com/file/d/1ANMPEpfGrsUj00WsLj-6pEb5vZd-5MRn/view?usp=sharing). 

* Para ver el GIF -> [Google Drive](https://drive.google.com/file/d/13v6rgpqCtsJpcTzS4wJgilDA6FTsFAl2/view?usp=sharing). 

* Explicación paso a paso:

1) Ingreso a "ZapaTienda", veo el listado completo de los productos o bien en la barra de navegacion puedo ir a "COLECCIONES" y elegir que coleccion ver, de un metodo u otro puedo presionar el boton "IR AL DETALLE"
![HOME](./Proyecto%20Final/src/images/HOME.png) 
![COLECCIÓN](./Proyecto%20Final/src/images/CATEGORIA.png)

2) Una vez que me encuentreo en el detalle, puedo seleccionar la cantidad presionando "+" o "-" de productos que deseo comprar y presionar "AGREGAR". Cuando presiono "AGREGAR" se hara visible el botón "IR AL CARRITO", esto mismo lo puedo realizar desde la barra de navegación en el icono del carrito o bien puedo presionar en "VOLVER AL CATÁLOGO" lo cual me redirige al Home.
![DETALLE](./Proyecto%20Final/src/images/DETALLE.png)

3) Si presiono en "IR AL CARRITO" voy a ver todos los productos y me encontrare con la opcion de eliminar un producto en particular o vaciar todo el carrito. Tambien puedo presionar el boton "FINALIZAR COMPRA"
![CARRITO](./Proyecto%20Final/src/images/CARRITO.png)

4) Si presiono en "FINALIZAR COMPRA" voy a acceder al formulario de verificación de datos, una vez completado todo el formulario presiono en "COMPRAR"
![FORMULARIO DE COMPRA](./Proyecto%20Final/src/images/FORMULARIO.png)

5) Si la compra se realiza con exito, se hara visible el detalle de la compra, donde veo el ID y fecha de la compra. Aqui puedo presionar en el botón de "IR A PEDIDOS"
![ORDEN DE COMPRA](./Proyecto%20Final/src/images/ORDENDECOMPRA.png)

6) Estando en "MIS PEDIDOS" cargo el ID de la compra y ahí podre acceder a todos los datos de la compra. Incluso tambien puedo acceder a todas las colecciones si deseo realizar otra compra.
![FORMULARIO DE BUSQUEDA](./Proyecto%20Final/src/images/BUSQUEDA.png)
![COMPRA BUSCADA](./Proyecto%20Final/src/images/BUSCADO.png)


### 7. CÓDIGO DESARROLLADO

* Ingresa a [Google Drive](https://drive.google.com/drive/folders/1JOE8UY9DbBXqIdWrV0np6SG-iSbLLrzh?usp=sharing). 


### REDES SOCIALES

¡Seguime en mis redes sociales para conocer todos mis proyectos!

[<img src="./images/readme/Instagram.png" alt="Instagram Logo" width="30" height="30">](https://www.instagram.com/code.ando/)
&nbsp;&nbsp;&nbsp;
[<img src="./images/readme/LinkedIn.png" alt="LinkedIn Logo" width="30" height="30">](https://www.linkedin.com/in/fedco-grrz/)
&nbsp;&nbsp;&nbsp;
[<img src="./images/readme/Github.png" alt="Github Logo" width="30" height="30">](https://github.com/fedco-gtz)

### PROYECTOS
[Desarrollo Web](https://mascotas-felices.netlify.app/)&nbsp;&nbsp;|&nbsp;&nbsp;
[JavaScript](https://vuelasmart.netlify.app/)&nbsp;&nbsp;|&nbsp;&nbsp;
[React Js](https://zapatienda.vercel.app/) &nbsp;&nbsp;|&nbsp;&nbsp;
[Programación Backend I: Desarrollo Avanzado de Backend]()&nbsp;&nbsp;|&nbsp;&nbsp;
[Programación Backend II: Diseño y Arquitectura Backend]()&nbsp;&nbsp;|&nbsp;&nbsp;
[Programación Backend III: Testing y Escalabilidad Backend]()&nbsp;&nbsp;|&nbsp;&nbsp;
[SQL]()&nbsp;&nbsp;|&nbsp;&nbsp;
[Testing QA Manual]()&nbsp;&nbsp;|&nbsp;&nbsp;
[Cloud Computing (AWS)]()
______________________________________________________________________________________________________
### `ÚLTIMA ACTUALIZACIÓN DEL PROYECTO 21/05/2024`

### `ENTREGA DE PRIMERA PRE-ENTREGA 20/03/2024` [DEVOLUCIÓN](https://www.canva.com/design/DAGLVDlMg1E/0n_Zo2OKYRHtoEKi16kOKA/view?utm_content=DAGLVDlMg1E&utm_campaign=designshare&utm_medium=link&utm_source=editor)
### `ENTREGA DE SEGUNDA PRE-ENTREGA 15/04/2024` [DEVOLUCIÓN](https://www.canva.com/design/DAGLVJorf_o/5dssiFAXA_9C6W_OEgYhTw/view?utm_content=DAGLVJorf_o&utm_campaign=designshare&utm_medium=link&utm_source=editor)
### `ENTREGA DE PROYECTO FINAL 06/05/2024` [DEVOLUCIÓN](https://www.canva.com/design/DAGLVIcvEps/2W-NUSeHJoLSciUGCXXUow/view?utm_content=DAGLVIcvEps&utm_campaign=designshare&utm_medium=link&utm_source=editor)

______________________________________________________________________________________________________
### CERTIFICADOS REACT JS [CLICK ACÁ](https://www.canva.com/design/DAGLVK24zrQ/gaf5OkWWQpTpYaQmbte6Lw/view?utm_content=DAGLVK24zrQ&utm_campaign=designshare&utm_medium=link&utm_source=editor)

### CERTIFICADOS CARRERA DE DESARROLLO FRONTEND REACT [CLICK ACÁ](https://www.canva.com/design/DAGLVfcSI10/SBSdxpRSWGN0ryWBi-cHsg/view?utm_content=DAGLVfcSI10&utm_campaign=designshare&utm_medium=link&utm_source=editor)# portfolio
# portfolio
# portfolio
# portfolio
# Fede
# Fede
# Portfolio
