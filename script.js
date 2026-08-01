document.addEventListener("DOMContentLoaded", () => {

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


    /* =========================================
       CONTRASEÑA
    ========================================== */

    function desbloquear() {

        if (password.value !== CONTRASENA) {

            errorPassword.classList.add("mostrar");

            password.value = "";

            password.focus();

            return;

        }


        errorPassword.classList.remove("mostrar");


        pantallaPrivada.style.transition =
            "opacity .8s ease, transform .8s ease";

        pantallaPrivada.style.opacity = "0";

        pantallaPrivada.style.transform =
            "scale(1.03)";


        setTimeout(() => {

            pantallaPrivada.style.display =
                "none";


            paginaPrincipal.classList.remove(
                "oculto"
            );


            /*
             * IMPORTANTE:
             * después de la contraseña
             * no mostramos la pantalla
             * "Entrar ❤️".
             */

            if (inicio) {

                inicio.style.display = "none";

            }


            window.scrollTo(0, 0);


            /*
             * Intentar reproducir música.
             */

            if (musica) {

                musica.volume = 0.7;

                musica.play().catch(() => {

                    console.log(
                        "El navegador bloqueó el autoplay."
                    );

                });

            }

        }, 800);

    }


    if (btnDesbloquear) {

        btnDesbloquear.addEventListener(
            "click",
            desbloquear
        );

    }


    if (password) {

        password.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Enter") {

                    desbloquear();

                }

            }
        );

    }


    /* =========================================
       BOTÓN DE MÚSICA
    ========================================== */

    if (btnMusica && musica) {

        btnMusica.addEventListener(
            "click",
            () => {

                if (musica.paused) {

                    musica.play()
                        .then(() => {

                            btnMusica.textContent =
                                "🎵";

                        })
                        .catch(() => {

                            alert(
                                "Toca nuevamente el botón 🎵 para reproducir la música."
                            );

                        });

                } else {

                    musica.pause();

                    btnMusica.textContent =
                        "🔇";

                }

            }
        );

    }


    /* =========================================
       BOTÓN ENTRAR
       Por seguridad, si se utiliza,
       también funciona.
    ========================================== */

    if (entrar) {

        entrar.addEventListener(
            "click",
            () => {

                if (musica) {

                    musica.play().catch(() => {});

                }

                inicio.style.transition =
                    "opacity .8s ease, transform .8s ease";

                inicio.style.opacity = "0";

                inicio.style.transform =
                    "scale(1.03)";


                setTimeout(() => {

                    inicio.style.display = "none";

                    window.scrollTo(0, 0);

                }, 800);

            }
        );

    }


    /* =========================================
       COMENZAR
    ========================================== */

    if (comenzar) {

        comenzar.addEventListener(
            "click",
            () => {

                const introduccion =
                    document.querySelector(
                        ".introduccion"
                    );

                if (introduccion) {

                    introduccion.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =========================================
       CONTADOR
       30/07/2025
    ========================================== */

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


        const valores = {

            anios: anios,
            meses: meses,
            dias: dias,
            horas: horas,
            minutos: minutos,
            segundos: segundos

        };


        Object.keys(valores).forEach(
            (id) => {

                const elemento =
                    document.getElementById(id);

                if (elemento) {

                    elemento.textContent =
                        valores[id];

                }

            }
        );

    }


    actualizarContador();

    setInterval(
        actualizarContador,
        1000
    );


    /* =========================================
       MENSAJES
    ========================================== */

    const mensajes = [

        "Eres una persona demasiado especial para mí. ❤️",

        "Me encanta compartir mi vida contigo. 🥰",

        "Admiro muchísimo la persona que eres. ✨",

        "Gracias por cada momento que hemos vivido juntos. 🤍",

        "Quiero seguir construyendo nuestro futuro juntos. 💍",

        "Te elegiría una y otra vez. ❤️"

    ];


    let mensajeActual = 0;


    const otroMensaje =
        document.getElementById(
            "otroMensaje"
        );


    if (otroMensaje) {

        otroMensaje.addEventListener(
            "click",
            () => {

                const mensaje =
                    document.getElementById(
                        "mensaje"
                    );

                if (!mensaje) return;


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


                    const texto =
                        document.getElementById(
                            "textoMensaje"
                        );

                    const numero =
                        document.getElementById(
                            "numeroMensaje"
                        );


                    if (texto) {

                        texto.textContent =
                            mensajes[ mensajeActual ];

                    }


                    if (numero) {

                        numero.textContent =
                            `${mensajeActual + 1} / ${mensajes.length}`;

                    }


                    mensaje.style.opacity = "1";

                    mensaje.style.transform =
                        "translateY(0)";


                }, 300);

            }
        );

    }


    /* =========================================
       CARTA
    ========================================== */

    const abrirCarta =
        document.getElementById(
            "abrirCarta"
        );


    if (abrirCarta) {

        abrirCarta.addEventListener(
            "click",
            () => {

                const carta =
                    document.getElementById(
                        "carta"
                    );

                if (!carta) return;


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

    }


    /* =========================================
       REGALO
    ========================================== */

    const regalo =
        document.getElementById(
            "regalo"
        );


    if (regalo) {

        regalo.addEventListener(
            "click",
            () => {

                const mensaje =
                    document.getElementById(
                        "regaloMensaje"
                    );


                if (mensaje) {

                    mensaje.classList.toggle(
                        "activo"
                    );

                }

            }
        );

    }


    /* =========================================
       RESPUESTA FINAL
    ========================================== */

    const respuestaBtn =
        document.getElementById(
            "respuestaBtn"
        );


    if (respuestaBtn) {

        respuestaBtn.addEventListener(
            "click",
            () => {

                const respuesta =
                    document.getElementById(
                        "respuesta"
                    );


                if (respuesta) {

                    respuesta.classList.add(
                        "activo"
                    );


                    respuesta.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }


                respuestaBtn.style.display =
                    "none";

            }
        );

    }

});
