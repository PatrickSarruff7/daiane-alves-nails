// Seleciona o formulário de contato
const formContato = document.getElementById("formContato");

// Identifica quando o formulário é enviado
formContato.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os dados preenchidos pela cliente
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    // Monta a mensagem que será enviada pelo WhatsApp
    const texto = `Olá, Daiane! Meu nome é ${nome}.
Telefone: ${telefone}.
Tenho interesse no serviço: ${servico}.
Mensagem: ${mensagem}`;

    // Prepara o link do WhatsApp
    const linkWhatsApp = `https://wa.me/5532999487368?text=${encodeURIComponent(texto)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(linkWhatsApp, "_blank");

});