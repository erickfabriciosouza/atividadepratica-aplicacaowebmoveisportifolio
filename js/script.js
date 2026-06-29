// Captura o formulário de contato do HTML através do seu ID
const form = document.getElementById('contact-form');

// Adiciona um "ouvinte de evento" que detecta quando o usuário tenta submeter o formulário
form.addEventListener('submit', function(event) {
    // event.preventDefault() previne o comportamento padrão do navegador de recarregar a página ao enviar o formulário
    event.preventDefault(); 

    // Captura os valores digitados nos campos. 
    // O método .trim() remove espaços em branco acidentais no início e no final do texto.
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Expressão Regular (Regex) básica para verificar o padrão de e-mail.
    // Exige algo antes do @, o símbolo @, algo depois, o ponto (.), e a terminação do domínio.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Etapa de Validação 1: Verifica se há algum campo obrigatório em branco
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return; // O return interrompe a execução do script aqui, impedindo o envio falso
    }

    // Etapa de Validação 2: Verifica se a estrutura do e-mail é compatível com o Regex definido
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).');
        return;
    }

    // Simulação do Envio: Se passar pelas validações acima, exibe a mensagem de sucesso
    alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.');
    
    // O método .reset() limpa todos os campos do formulário para um novo preenchimento
    form.reset();
});

// Funcionalidade Adicional: Botão para Alternar Tema Claro/Escuro
const themeToggleBtn = document.getElementById('theme-toggle');

// Ouve o clique no botão do menu
themeToggleBtn.addEventListener('click', function() {
    // Busca o atributo data-theme na tag <html> (o elemento root do documento)
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Se o tema atual for escuro, ele remove o atributo (voltando para as cores claras padrão)
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        // Se for claro, ele injeta data-theme="dark", ativando a sobrescrita de variáveis no CSS
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});
