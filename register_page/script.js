

const btn_login = document.getElementById('login-btn');

    function login_acive(){
        const login = document.getElementById('general');
        login.classList.add('active');
    }

btn_login.addEventListener('click', login_acive);

                        //Register//
//-----------------------------------------------------------\\

    const btn_register = document.getElementById('register-btn');

    function add_register(){
        const register = document.getElementById('general');
        register.classList.add('active_register');

    }

    btn_register.addEventListener('click', add_register);


                    //Comeback Register\\
//------------------------------------------------------------\\

    const btn_back_register = document.getElementById('comeback');

    function back_register(){
       const comeback = document.getElementById('general');
        comeback.classList.remove('active_register');
    }

    btn_back_register.addEventListener('click', back_register);

    //============================================================================


    