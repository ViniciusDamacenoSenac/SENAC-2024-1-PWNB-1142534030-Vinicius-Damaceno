$(document).ready(function () {
    // Função para exibir mensagens de erro com animação
    function showError(element, message) {
      element.next('.error-message').remove();
      element.after('<span class="error-message">' + message + '</span>');
      element.next('.error-message').fadeIn(); // Animação de fade in
    }
  
    // Função para remover mensagens de erro com animação
    function clearError(element) {
      element.next('.error-message').fadeOut(function() { // Animação de fade out
        $(this).remove();
      });
    }
  
    // Validações em tempo real
    $('#username').on('input', function () {
      var username = $(this).val().trim();
      if (username.length < 6 || username.length > 50) {
        showError($(this), 'O nome de usuário deve ter entre 6 e 50 caracteres.');
      } else {
        clearError($(this));
      }
    });
  
    $('#password').on('input', function () {
      var password = $(this).val().trim();
      if (password.length < 8 || password.length > 50) {
        showError($(this), 'A senha deve ter entre 8 e 50 caracteres.');
      } else {
        clearError($(this));
      }
    });
  
    // Validação ao clicar no botão de login
    $('#loginButton').click(function () {
      // Remover mensagens de erro existentes
      $('.error-message').remove();
  
      // Obtendo os valores dos campos de entrada
      var username = $('#username').val().trim();
      var password = $('#password').val().trim();
  
      // Verificando se os campos estão vazios
      var isValid = true;
  
      if (username === '') {
        showError($('#username'), 'Por favor, insira o nome de usuário.');
        isValid = false;
      }
  
      if (password === '') {
        showError($('#password'), 'Por favor, insira a senha.');
        isValid = false;
      }
  
      // Verificando o comprimento do nome de usuário
      if (username.length < 6 || username.length > 50) {
        showError($('#username'), 'O nome de usuário deve ter entre 6 e 50 caracteres.');
        isValid = false;
      }
  
      // Verificando o comprimento da senha
      if (password.length < 8 || password.length > 50) {
        showError($('#password'), 'A senha deve ter entre 8 e 50 caracteres.');
        isValid = false;
      }
  
      // Se todos os campos estiverem preenchidos corretamente, o formulário será enviado
      if (isValid) {
        $('body').append('<div class="success-message">Login bem-sucedido! Redirecionando...</div>');
        $('.success-message').fadeIn(); // Animação de fade in para a mensagem de sucesso
        setTimeout(function () {
          // Aqui você pode adicionar a lógica para enviar o formulário para o servidor
          window.location.href = "index.html";
        }, 2000); // Espera 2 segundos antes de redirecionar
      }
  
      return false;
    });
  });
  