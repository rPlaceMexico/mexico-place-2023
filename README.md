# PLANTILLA DE PIXELES PARA R/MEXICO (JULIO 2023)

## INSTRUCCIONES

1. Descargar el plugin para navergador:
   - CHROME/OPERA  
     https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en

   - FIREFOX  
     https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/

1. Una vez unstalado el plugin hay que instalar el script entrando a la siguiente dirección:

   **SCRIPT: https://github.com/francerz/mexico-place-2023/raw/master/userscript.user.js**
  
2. Una vez instalado todo, en r/place y deberia funcionar si no lo hace hagan CTRL + F5 o SHIFT + F5

## COMO FUNCIONA

En r/place saldran cuadros pequenos en el lugar del disenio, tenemos que pintar los cuadros de atras grandes del mismo color que el cuadro chiquito

PARA HACER APORTES

1. Editar MexicoFTW.png

   Se debe primero editar la imagen llamada MexicoFTW.png esta tiene el mismo tamaño que el canvas de r/place.
   Cada pixel en la imagen corresponde a un pixel en r/place con las mismas coordenadas. 

2. Ejecutar el script de python dithering.py en la misma carpeta que la imagen.

3. La imagen que genera el script de python debe ser actualizada dentro de este
   repositorio para que se le actualice a TODOS los que usen nuestro Script. 


         
