var passwords = [];

    function generatePassword() {
      var length = document.getElementById('password-length').value;
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
      var password = '';

      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
      }

      document.getElementById('password-output').value = password;
      passwords.push({ password: password, timestamp: new Date() });
    }

    function copyPassword() {
      var passwordOutput = document.getElementById('password-output');
      passwordOutput.select();
      document.execCommand('copy');
    }

    function showPasswords() {
      var passwordsList = document.getElementById('passwords-list');
      passwordsList.value = '';

      passwords.forEach(function(item) {
        passwordsList.value += 'Senha: ' + item.password + '\n';
        passwordsList.value += 'Data e hora de cópia: ' + item.timestamp.toLocaleString() + '\n\n';
      });
    }