$(document).ready(function () {
  // Função para exibir mensagens de erro com animação
  function showError(element, message) {
    element.next('.error-message').remove();
    element.after('<span class="error-message">' + message + '</span>');
    element.next('.error-message').fadeIn();
  }

  // Função para remover mensagens de erro com animação
  function clearError(element) {
    element.next('.error-message').fadeOut(function() {
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

  $('#email, #cmail').on('input', function () {
    var email = $('#email').val().trim();
    var cmail = $('#cmail').val().trim();
    if (email !== cmail) {
      showError($('#cmail'), 'Os endereços de e-mail não coincidem.');
    } else {
      clearError($('#cmail'));
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

  $('#cpassword').on('input', function () {
    var password = $('#password').val().trim();
    var cpassword = $(this).val().trim();
    if (password !== cpassword) {
      showError($(this), 'As senhas não coincidem.');
    } else {
      clearError($(this));
    }
  });

  // Validação ao clicar no botão de registro
  $('#registerButton').click(function () {
    // Remover mensagens de erro existentes
    $('.error-message').remove();

    // Obtendo os valores dos campos de entrada
    var username = $('#username').val().trim();
    var email = $('#email').val().trim();
    var cmail = $('#cmail').val().trim();
    var password = $('#password').val().trim();
    var cpassword = $('#cpassword').val().trim();

    // Verificando se os campos estão vazios
    var isValid = true;

    if (username === '') {
      showError($('#username'), 'Por favor, preencha o nome de usuário.');
      isValid = false;
    }
    if (email === '') {
      showError($('#email'), 'Por favor, preencha o e-mail.');
      isValid = false;
    }
    if (cmail === '') {
      showError($('#cmail'), 'Por favor, confirme o e-mail.');
      isValid = false;
    }
    if (password === '') {
      showError($('#password'), 'Por favor, preencha a senha.');
      isValid = false;
    }
    if (cpassword === '') {
      showError($('#cpassword'), 'Por favor, confirme a senha.');
      isValid = false;
    }

    // Verificando o comprimento do nome de usuário
    if (username.length < 6 || username.length > 50) {
      showError($('#username'), 'O nome de usuário deve ter entre 6 e 50 caracteres.');
      isValid = false;
    }

    // Verificando se os emails coincidem
    if (email !== cmail) {
      showError($('#cmail'), 'Os endereços de e-mail não coincidem.');
      isValid = false;
    }

    // Verificando o comprimento da senha
    if (password.length < 8 || password.length > 50) {
      showError($('#password'), 'A senha deve ter entre 8 e 50 caracteres.');
      isValid = false;
    }

    // Verificando se as senhas coincidem
    if (password !== cpassword) {
      showError($('#cpassword'), 'As senhas não coincidem.');
      isValid = false;
    }

    // Verificando se o termo foi aceito
    if (!$('#termo').prop('checked')) {
      alert('Você precisa aceitar os termos para criar uma conta.');
      isValid = false;
    }

    // Se todos os campos estiverem preenchidos corretamente, o formulário será enviado
    if (isValid) {
      $('#successMessage').text('Cadastro bem-sucedido! Redirecionando...').fadeIn();
      setTimeout(function () {
        // Aqui você pode adicionar a lógica para enviar o formulário para o servidor
        window.location.href = "login.html";
      }, 2000); // Espera 2 segundos antes de redirecionar
    }

    return false;
  });
});
