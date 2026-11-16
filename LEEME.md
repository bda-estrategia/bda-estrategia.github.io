# Big Data Analytics y estrategia empresarial — GitHub Pages

Este paquete contiene la página estática completa con el diseño y el contenido aprobados.
No requiere instalación, compilación ni servidor de aplicaciones.

## Publicación

1. Extrae el ZIP.
2. Sube todos los archivos extraídos a la raíz del repositorio elegido, incluido `.nojekyll`.
   `index.html` debe quedar directamente en la raíz, sin una carpeta contenedora adicional.
3. En el repositorio, abre Settings → Pages.
4. En Build and deployment → Source, selecciona Deploy from a branch.
5. Selecciona la rama que contiene estos archivos (por ejemplo, main) y la carpeta /(root).
6. Guarda y espera a que GitHub Pages muestre la dirección publicada.

Documentación oficial:
https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Archivos

- index.html: página completa.
- layout.css: estilos y adaptación a distintos tamaños de pantalla.
- app.js: búsqueda de referencias, copia del enlace y navegación.
- poster.pdf: póster A0 horizontal para descargar.
- poster.webp: vista previa del póster.
- referencias.ris: bibliografía para gestores de referencias.
- referencias.json: bibliografía estructurada.
- qr.png y qr.svg: código QR en formatos de imagen y vectorial.
- robots.txt: instrucciones para rastreadores.
- .nojekyll: archivo vacío para publicar los archivos estáticos directamente.
- LEEME.md: estas instrucciones.

## Enlace del QR

Se conserva el QR original, tanto en el PDF como en los archivos PNG y SVG:
https://bda-estrategia-ucr-2026.carlosvillalobos2003.chatgpt.site

El botón «Copiar enlace» y los metadatos canónicos y sociales también conservan esa dirección.
Subir esta copia a GitHub Pages no cambia el destino del QR. Si se desea trasladar ese destino
a GitHub Pages, hará falta la URL definitiva para actualizar el QR del póster y los archivos.

## Verificación del paquete

Los archivos de la página se incluyen sin modificar. Las rutas de CSS, JavaScript,
imágenes y descargas son relativas, por lo que admiten tanto la raíz de un dominio
como una ruta de proyecto de GitHub Pages. El contenido mantiene los cinco correos
como texto y el cierre de la revisión del 11 de noviembre de 2026.
