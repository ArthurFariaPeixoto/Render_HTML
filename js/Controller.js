const Controller ={

    caixaTextoHTML: '<html class="expand close">' +
                    '<head>' +
                    '<style type="text/css">' +
                    '.expand { width: 100%; height: 100%; }' +
                    '.close { border: none; margin: 0px; padding: 0px; }' +
                    'html,body { overflow: hidden; }' +
                    '<\/style>' +
                    '<\/head>' +
                    '<body class="expand close" onload="document.fomulario.textarea.focus(); document.fomulario.textarea.select();">' +
                    '<form class="expand close" name="fomulario">' +
                    '<textarea class="expand close" style="background: #212121; color:white" name="textarea" wrap="hard" spellcheck="false">' +
                    '<\/textarea>' +
                    '<\/form>' +
                    '<\/body>' +
                    '<\/html>',

    HTML_padrao: '<h3>Bem-vindo ao meu programa<\/h3>\n' +
                 '<p>Digite o c&oacute;digo HTML neste container, e ele aparecer&aacute; neste frame abaixo.<\/p>',

    creditos: '<div style="position:absolute; margin:.3em; bottom:0em; right:0em;"><small>\n  Criado por <a href="https://github.com/ArthurFariaPeixoto" target="_blank">Arthur Faria<\/a>.\n<\/small><\/div>',

    antigo: '',

    atualizarHTML: function atualizarHTML(){
        var textarea = window.editbox.document.fomulario.textarea;
        var dynamic = dynamicframe.document;

        if (Controller.antigo !== textarea.value) {
            Controller.antigo = textarea.value;
            dynamic.open();
            dynamic.write(Controller.antigo);
            dynamic.write(Controller.creditos);
            dynamic.close();
        }
        window.setTimeout(atualizarHTML, 150);
    },

    iniciar: function iniciar(){
        window.editbox.document.write(Controller.caixaTextoHTML);
        window.editbox.document.close();
        window.editbox.document.fomulario.textarea.value = Controller.HTML_padrao;
        this.atualizarHTML();
    },

    start: function start(){
        this.iniciar();
    }
}