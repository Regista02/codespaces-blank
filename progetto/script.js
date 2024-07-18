document.addEventListener('DOMContentLoaded', function() {
    const inp = document.getElementById('username');

    inp.addEventListener('keypress', function(e) {
        if (e.which === 13) {
            invia(this.value);
        }
    });

    function invia(username) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'test.php');
        xhr.setRequestHeader("Content-type", "application/json");

        const data = JSON.stringify({ username: username });
        xhr.send(data);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(this.responseText);
                console.log(response.message);
            } else {
                console.error('Errore nella richiesta AJAX');
            }
        };
    }
});