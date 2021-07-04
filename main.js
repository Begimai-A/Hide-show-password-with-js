let state = false;

function toggle() {
    if (state) {
        document.querySelector('#password').setAttribute('type', 'password');
        document.getElementById('eye').style.color = "#7a797e";
        state = false;

    } else {
        document.getElementById('password').setAttribute('type', 'text');
        // document.querySelector('.eye-icon').innerHTML='<i class="fa fa-eye-slash" aria-hidden="true" id="eye-slash" onclick="toggle()"></i>';
        document.getElementById('eye').style.color = "#5887ef";
        state = true;
        
    }


}