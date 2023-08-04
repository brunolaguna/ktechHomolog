export function swalFire(titulo, texto, icone, cor_icone, cor_botao, texto_cor_botao) {

    Swal.fire({

        title: titulo,
        text: texto,
        icon: icone,
        iconColor: cor_icone,
        confirmButtonColor: cor_botao,
        confirmButtonText: texto_cor_botao,

      })

}