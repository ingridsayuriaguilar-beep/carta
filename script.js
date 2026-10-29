/* =========================================
   ELEMENTOS
========================================= */

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");
const abrirCarta = document.getElementById("abrirCarta");


/* =========================================
   ESTADO DE LA MÚSICA
========================================= */

let reproduciendo = false;


/* =========================================
   BOTÓN DEL VINILO
========================================= */

if (botonMusica) {

    botonMusica.addEventListener("click", () => {

        if (reproduciendo) {

            musica.pause();

            botonMusica.classList.remove(
                "reproduciendo"
            );

            reproduciendo = false;

        } else {

            musica.play()
                .then(() => {

                    botonMusica.classList.add(
                        "reproduciendo"
                    );

                    reproduciendo = true;

                })
                .catch(() => {

                    console.log(
                        "El navegador bloqueó la reproducción automática."
                    );

                });

        }

    });

}


/* =========================================
   BOTÓN PARA ABRIR LA CARTA
========================================= */

if (abrirCarta) {

    abrirCarta.addEventListener("click", () => {

        /*
         * El clic del usuario permite que
         * el navegador reproduzca audio.
         */

        musica.play()
            .then(() => {

                reproduciendo = true;

            })
            .catch(() => {

                console.log(
                    "No se pudo iniciar la música."
                );

            });


        /*
         * Pequeña transición antes
         * de cambiar de página.
         */

        document.body.style.transition =
            "opacity .7s ease";

        document.body.style.opacity = "0";


        setTimeout(() => {

            window.location.href =
                "carta.html";

        }, 700);

    });

}


/* =========================================
   ENTRADA EN CARTA.HTML
========================================= */

window.addEventListener("load", () => {

    /*
     * Intentamos iniciar la música.
     * Si el navegador lo permite,
     * comenzará automáticamente.
     */

    if (musica) {

        musica.play()
            .then(() => {

                reproduciendo = true;

                if (botonMusica) {

                    botonMusica.classList.add(
                        "reproduciendo"
                    );

                }

            })
            .catch(() => {

                /*
                 * Si el navegador bloquea
                 * autoplay, simplemente dejamos
                 * el vinilo listo para pulsarlo.
                 */

                reproduciendo = false;

            });

    }

});