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


    /* =========================================
       ELEMENTOS DE LA PÁGINA
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


    /* =========================================
       DESBLOQUEAR
       CONTRASEÑA → PÁGINA DIRECTAMENTE
    ========================================= */

    function desbloquear() {

        if (password.value !== CONTRASENA) {

            errorPassword.classList.add("mostrar");

            password.value = "";

            password.focus();

            return;
        }


        errorPassword.classList.remove("mostrar");


        /* Transición de salida */

        pantallaPrivada.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        pantallaPrivada.style.opacity = "0";

        pantallaPrivada.style.transform =
            "scale(1.03)";


        setTimeout(() => {

            /* Ocultar contraseña */

            pantallaPrivada.style.display =
                "none";


            /* Mostrar página */

            paginaPrincipal.classList.remove(
                "oculto"
            );


            /*
             * IMPORTANTE:
             * Ocultamos la pantalla intermedia
             * que tenía el botón "Entrar ❤️".
             */

            if (inicio) {

                inicio.style.display = "none";

            }


            /*
             * Aseguramos que la página
             * comience arriba.
             */

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });


            /*
             * Intentamos reproducir la música.
             *
             * Como esta función fue activada
             * por una interacción del usuario,
             * algunos navegadores permitirán
             * la reproducción.
             */

            if (musica) {

                musica.volume = 0.7;

                musica.play().catch(() => {

                    /*
                     * iPhone puede bloquear
                     * la reproducción automática.
                     *
                     * En ese caso se podrá
                     * iniciar mediante 🎵.
                     */

                });

            }

        }, 800);

    }


    /* =========================================
       BOTÓN DE CONTRASEÑA
    ========================================= */

    if (btnDesbloquear) {

        btnDesbloquear.addEventListener(
            "click",
            desbloquear
        );

    }


    /* =========================================
       ENTER EN LA CONTRASEÑA
    ========================================= */

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
       BOTÓN "ENTRAR"
       MANTENIDO POR COMPATIBILIDAD
    ========================================= */

    if (entrar) {

        entrar.addEventListener(
            "click",
            () => {

                if (musica) {

                    musica.play().catch(() => {});

                }


                if (inicio) {

                    inicio.style.transition =
                        "opacity 0.8s ease, transform 0.8s ease";

                    inicio.style.opacity = "0";

                    inicio.style.transform =
                        "scale(1.03)";


                    setTimeout(() => {

                        inicio.classList.add(
                            "oculto"
                        );

                        window.scrollTo({
                            top: 0,
                            behavior: "instant"
                        });

                    }, 800);

                }

            }
        );

    }


    /* =========================================
       BOTÓN COMENZAR
    ========================================= */

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
       MÚSICA
    ========================================= */

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

                            btnMusica.textContent =
                                "▶️";

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
       CONTADOR
       DESDE 30 DE JULIO DE 2025
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


        const elementoAnios =
            document.getElementById("anios");

        const elementoMeses =
            document.getElementById("meses");

        const elementoDias =
            document.getElementById("dias");

        const elementoHoras =
            document.getElementById("horas");

        const elementoMinutos =
            document.getElementById("minutos");

        const elementoSegundos =
            document.getElementById("segundos");


        if (elementoAnios) {

            elementoAnios.textContent =
                anios;

        }


        if (elementoMeses) {

            elementoMeses.textContent =
                meses;

        }


        if (elementoDias) {

            elementoDias.textContent =
                dias;

        }


        if (elementoHoras) {

            elementoHoras.textContent =
                horas;

        }


        if (elementoMinutos) {

            elementoMinutos.textContent =
                minutos;

        }


        if (elementoSegundos) {

            elementoSegundos.textContent =
                segundos;

        }

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


                if (!mensaje) {
                    return;
                }


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


                    const textoMensaje =
                        document.getElementById(
                            "textoMensaje"
                        );


                    const numeroMensaje =
                        document.getElementById(
                            "numeroMensaje"
                        );


                    if (textoMensaje) {

                        textoMensaje.textContent =
                            mensajes[mensajeActual];

                    }


                    if (numeroMensaje) {

                        numeroMensaje.textContent =
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
    ========================================= */

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


                if (!carta) {
                    return;
                }


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
    ========================================= */

    const regalo =
        document.getElementById(
            "regalo"
        );


    if (regalo) {

        regalo.addEventListener(
            "click",
            () => {

                const regaloMensaje =
                    document.getElementById(
                        "regaloMensaje"
                    );


                if (regaloMensaje) {

                    regaloMensaje.classList.toggle(
                        "activo"
                    );

                }

            }
        );

    }


    /* =========================================
       RESPUESTA FINAL
    ========================================= */

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
