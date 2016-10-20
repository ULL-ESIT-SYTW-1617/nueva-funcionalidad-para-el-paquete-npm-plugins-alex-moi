# Sistemas y Tecnologías Web. Tareas Iniciales.


## Introducción

El objetivo de esta práctica es crear un package **NodeJS** y publicarlo en npm. El paquete se construye a partir de el código que haya desarrollado en la práctica anterior.

##Tutorial para su instalación

Instalar el paquete

```shell
npm install -g gitbook-start-alex-moi-nitesh
npm install --save gitbook-start-alex-moi-nitesh
```

Instalación ficheros

```shell
gitbook-start-alex-moi-nitesh -d [nombre directorio]
```

##Tutorial para su ejecución

Para ejecutar, ponemos el siguiente comando:

`gitbook-start-alex-moi-nitesh [opciones]`

[opciones] serían:
*    -a: Especificar el autor del gitbook
*    -n: Especificar el nombre del gitbook
*    -c: Especificar el nombre del directorio
*    -u: Especificar la url del repositorio git
*    -h: Help (ayuda)
*    -d: para hacer un deploy a IaaS


Una vez instalado y ejecutado, hacemos:

```shell
npm install
gitbook install
```

Una vez completado los "ficheros.md" de nuestro book, para construirlo y publicarlo hacemos:

```shell
gulp build
gulp deploy
```

Un ejemplo de la versión final del gitbook sería: [Ejemplo](https://alu0100782851.github.io/prueba/)

##Tutorial para ejecutar el "deploy"

Para ejecutar la función deploy hay que escribir el siguiente comando:

`gitbook-start-alex-moi-nitesh -d iaas-ull-es [Obligatorias] [Otras Opciones]`

[Obligatorias] serían:

```
--iaas_ip: Especificar la IP del IaaS
--iaas_path: Especificar la PATH de IaaS
```


[Otras Opciones] serían:

```
-a: Especificar el autor del gitbook
-n: Especificar el nombre del gitbook
-c: Especificar el nombre del directorio
-u: Especificar la url del repositorio git
```

Ejemplo con la parte obligatoria:
`gitbook-start-alex-moi-nitesh -d iaas-ull-es --iaas_ip 192.162.30.50 --iaas_path ./MyPath`

Con la parte obligarotia, se crea el gitbook:
*   sin un nombre del autor
*   sin un nombre del gitbook
*   sin una URL para el repositorio
*   con nombre del directorio: /Book (por defecto)

AHora bien, si queremos especificarle las otras opciones, pondíamos:

*   Ejemplo Completo:
`gitbook-start-alex-moi-nitesh -d iaas-ull-es --iaas_ip 192.162.30.50 --iaas_path ./MyPath -a AuthorsName -n MyGitbook -c /MyDirectorio -u http://MyUrl.git`   

## Enlaces importantes
*  [Página en NPM](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/creacion-de-paquetes-y-modulos-en-nodejs-alex-moi)
*  [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicanm.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

## Autores

* Alexander Cole Mora   | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)
* Nitesh Gul Ramnani    | [Página Personal](http://alu0100814651.github.io/blog/)

![Universidad de La Laguna](https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-alex-moi/blob/master/images/logotipo-principal.png?raw=true)