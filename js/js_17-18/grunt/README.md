#Сборка проекта с помощью Grunt#

для работы необходимы:

[Node.js](https://nodejs.org/en/)

[npm](https://www.npmjs.com/)

[Grunt](http://gruntjs.com/)



Для работы с предпроцессором [Sass](http://sass-lang.com) также необходимо установить:

[Ruby](http://www.ruby-lang.org/en/downloads/)

[Sass](http://sass-lang.com/download.html) 

после скачиания зайти в папку проекта из командноы строки и набрать

		npm install

по команде grunt - будет создана папка build в которой будут папки js, css, image

* в build\js попадут скрипты из папки js после конкатенации и минификации;
* в build\css  попадут .scss файлы  из папки css после обработки предпроцессором SASS и минификации;
* в build\image  попадут графические файлы  из папки image после их сжатия;

по команде grunt watch  -  будет включено слежение за скриптами в папке js  и .scss  файлами в папке css, при их изменении они будут обработаны и помещены в папку build
