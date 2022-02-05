Pautas de Contribución
======================

Estas son las pautas que usaremos al momento de contribuir.

Arbol de directorios
--------------------

``` text
[root]-+ Archivos de configuración y el README
       |
       +-[.vscode] Archivos de configuración de VS Code
       +-[site]-+ Archivos del sitio
                |
                +-[bin] Archivos binarios del servidor
                +-[controllers] Controladores
                +-[public]-+ Archivos públicos del servidor
                |          |
                |          +-[css] Hojas de estilo del sitio
                |          +-[img] Imágenes del sitio
                |
                +-[routes] Enrutadores
                +-[src]-+ Archivos fuente del proyecto
                |       |
                |       +-[data] Archivos de datos
                |
                +-[views]-+ Archivos de vistas
                          |
                          +-[partials]-+ Archivos partials para usar en las vistas
                                       |
                                       +-[home] Partials del home
```

Pautas para los commits
-----------------------

Los commits tienen que muy atomizados y funcionales. El resumen debe explicar en
no más de 50 caracteres los cambios realizados. El resúmen debería tener el
siguiente formato:

``` text
<Zona trabajada>: <Resumen de los cambios>
```

Y deberían contar con una descripción con el siguiente formato:

``` text
Resumen del comportamiento actual

Resumen de los problemas que trae el comportamiento actual, o resumen de los cambios
discutidos

Resumen y explicacion de los cambios
```

> NOTA: Los cambios deberían ser manejados en ramas independientes y no commitear
directamente en `master`.

Pasos a realizar para trabajar
------------------------------

Es importante que antes de empezar a hacer nada, se realice un pull de los cambios
con

``` shell
git pull
```

Es importante que todos los cambios los hagan en su propia rama creada para ello,
así como también es importante atomizar el uso de las ramas, por ejemplo: Si quiero
trabajar sobre los partials de home, creo una rama `partials-home`, si quiero
trabajar sobre los datos de los usuarios, creo una rama `datos-usuarios`, y así.
Luego de finalizado el trabajo, se accede a GitHub y se crea un nuevo Pull Request,
para poder exponer el trabajo al grupo y que pueda ser revisado.

Las ramas se crean con:

``` shell
git checkout -b <nombre-de-rama>
```

Y se eliminan con:

``` shell
git branch -D <nombre-de-rama>
```

> NOTA: Es importante eliminar las ramas luego de mergeado el Pull Request.

También se debe tener en cuenta realizar commits lo más atómicos posibles, y usando
lo siguiente para crearlos:

``` shell
git add .
git commit -m "Mensaje del commit"
```

E intentar siempre hacer push a todos los cambios que hagan con `git push`, o tambien
`git push -u origin <nombre-de-rama>` si es que es el primer commit que van a
realizar en la rama en la que se encuentran.