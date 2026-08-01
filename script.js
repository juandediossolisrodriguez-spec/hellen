document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       CONTRASEÑA DEL ANIVERSARIO
       30 DE JULIO DE 2025
    ========================================= */

    const CONTRASENA = "30072025";


    const pantallaPrivada =
        document.getElementById("pantallaPrivada");

    const paginaPrincipal =
        document.getElementById("paginaPrincipal");

    const password =
        document.getElementById("password");

    const btnDesbloquear =
        document.getElementById("btnDesbloquear");

    const errorPassword =
        document.getElementById("errorPassword");


    function desbloquear() {

        if (password.value === CONTRASENA) {

            errorPassword.classList.remove("mostrar");

            pantallaPrivada.style.opacity = "0";

            pantallaPrivada.style.transition =
                "opacity .8s ease";


            setTimeout(() => {

                pantallaPrivada.style.display =
                    "none";

                paginaPrincipal.classList.remove(
                    "oculto"
                );

                window.scrollTo(0, 0);

            }, 800);


        } else {

            errorPassword.classList.add(
                "mostrar"
            );

            password.value = "";

            password.focus();

        }

    }


    btnDesbloquear.addEventListener(
        "click",
        desbloquear
    );


    password.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                desbloquear();

            }

        }
    );


    /* =========================================
       INICIO
    ========================================= */

    const inicio =
        document.getElementById("inicio");

    const entrar =
        document.getElementById("entrar");

    const comenzar =
        document.getElementById("comenzar");


    const musica =
        document.getElementById("musica");

    const btnMusica =
        document.getElementById("btnMusica");


    entrar.addEventListener(
        "click",
        () => {

            musica.play().catch(() => {});


            inicio.style.transition =
                "opacity .8s ease, transform .8s ease";

            inicio.style.opacity = "0";

            inicio.style.transform =
                "scale(1.03)";


            setTimeout(() => {

                inicio.classList.add("oculto");

                window.scrollTo(0, 0);

            }, 800);

        }
    );


    comenzar.addEventListener(
        "click",
        () => {

            document
                .querySelector(".introduccion")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


    /* =========================================
       MÚSICA
    ========================================= */

    btnMusica.addEventListener(
        "click",
        () => {

            if (musica.paused) {

                musica.play()
                    .then(() => {

                        btnMusica.textContent = "🎵";

                    })
                    .catch(() => {});

            } else {

                musica.pause();

                btnMusica.textContent = "🔇";

            }

        }
    );


    /* =========================================
       CONTADOR
    ========================================= */

    const fechaInicio =
        new Date(
            2025,
            6,
            30,
            0,
            0,
            0
        );


    function actualizarContador() {

        const ahora = new Date();

        let anios =
            ahora.getFullYear() -
            fechaInicio.getFullYear();

        let meses =
            ahora.getMonth() -
            fechaInicio.getMonth();

        let dias =
            ahora.getDate() -
            fechaInicio.getDate();

        let horas =
            ahora.getHours() -
            fechaInicio.getHours();

        let minutos =
            ahora.getMinutes() -
            fechaInicio.getMinutes();

        let segundos =
            ahora.getSeconds() -
            fechaInicio.getSeconds();


        if (segundos < 0) {

            segundos += 60;

            minutos--;

        }


        if (minutos < 0) {

            minutos += 60;

            horas--;

        }


        if (horas < 0) {

            horas += 24;

            dias--;

        }


        if (dias < 0) {

            const diasMesAnterior =
                new Date(
                    ahora.getFullYear(),
                    ahora.getMonth(),
                    0
                ).getDate();

            dias += diasMesAnterior;

            meses--;

        }


        if (meses < 0) {

            meses += 12;

            anios--;

        }


        document.getElementById(
            "anios"
        ).textContent = anios;


        document.getElementById(
            "meses"
        ).textContent = meses;


        document.getElementById(
            "dias"
        ).textContent = dias;


        document.getElementById(
            "horas"
        ).textContent = horas;


        document.getElementById(
            "minutos"
        ).textContent = minutos;


        document.getElementById(
            "segundos"
        ).textContent = segundos;

    }


    actualizarContador();

    setInterval(
        actualizarContador,
        1000
    );


    /* =========================================
       MENSAJES
    ========================================= */

    const mensajes = [

        "Eres una persona demasiado especial para mí. ❤️",

        "Me encanta compartir mi vida contigo. 🥰",

        "Admiro muchísimo la persona que eres. ✨",

        "Gracias por cada momento que hemos vivido juntos. 🤍",

        "Quiero seguir construyendo nuestro futuro juntos. 💍",

        "Te elegiría una y otra vez. ❤️"

    ];


    let mensajeActual = 0;


    document
        .getElementById("otroMensaje")
        .addEventListener(
            "click",
            () => {

                const mensaje =
                    document.getElementById(
                        "mensaje"
                    );


                mensaje.style.opacity = "0";

                mensaje.style.transform =
                    "translateY(10px)";


                setTimeout(() => {

                    mensajeActual++;


                    if (
                        mensajeActual >=
                        mensajes.length
                    ) {

                        mensajeActual = 0;

                    }


                    document.getElementById(
                        "textoMensaje"
                    ).textContent =
                        mensajes[ mensajeActual ];


                    document.getElementById(
                        "numeroMensaje"
                    ).textContent =
                        `${mensajeActual + 1} / ${mensajes.length}`;


                    mensaje.style.opacity = "1";

                    mensaje.style.transform =
                        "translateY(0)";

                }, 300);

            }
        );


    /* =========================================
       CARTA
    ========================================= */

    const abrirCarta =
        document.getElementById(
            "abrirCarta"
        );


    abrirCarta.addEventListener(
        "click",
        () => {

            const carta =
                document.getElementById(
                    "carta"
                );


            carta.classList.toggle(
                "ocultar"
            );


            if (
                carta.classList.contains(
                    "ocultar"
                )
            ) {

                abrirCarta.innerHTML =
                    "💌<small>Abrir carta</small>";

            } else {

                abrirCarta.innerHTML =
                    "💌<small>Cerrar carta</small>";

            }

        }
    );


    /* =========================================
       REGALO
    ========================================= */

    document
        .getElementById("regalo")
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        "regaloMensaje"
                    )
                    .classList.toggle(
                        "activo"
                    );

            }
        );


    /* =========================================
       RESPUESTA FINAL
    ========================================= */

    document
        .getElementById("respuestaBtn")
        .addEventListener(
            "click",
            () => {

                const respuesta =
                    document.getElementById(
                        "respuesta"
                    );


                respuesta.classList.add(
                    "activo"
                );


                document.getElementById(
                    "respuestaBtn"
                ).style.display = "none";


                respuesta.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );


});