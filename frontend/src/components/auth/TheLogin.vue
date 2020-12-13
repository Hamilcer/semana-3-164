<template>
<div class="modal-dialog text-center" id="body-content">
    <div class="col-sm-8 main-section" >
        <div class="modal-content">
            <div class="col-12 user-img">
                <img src="img/avatar1.png"/>
            </div>
        <form class= "col-12">
            <div class="form-group" id="user-group">                
                <input v-model="singin.email" type="email" class="form-control" id="email" placeholder="email"/>
            </div>
            <br>
            <div class="form-group" id="password-group">
                <input v-model="singin.password" type="password" class="form-control" id="password" placeholder="contraseña"/>
            </div>
            <br>
            
            <button @click.prevent="loginUser" type="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i> Ingresar </button>
        </form>
        <div class="col-12 forgot">
            <a href="#">Recordar contraseña</a>
        </div>
        <br>
        </div>
    </div>
</div>

</template>

<script>
import swal from 'sweetalert';
export default {
    name:'TheLogin',
    data(){
        return{
            singin: {
                email:'',
                password: ''
            }
        }
    },
    methods:{
        async loginUser(){
            try{
                let response = await this.$http.post('/api/auth/singin', this.singin);
                console.log(response.data)
                let token = response.data.accessToken;
                let user = response.data.user;

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));

                if(token){
                    swal ("Éxito!!","Login correcto","success");
                    this.$router.push('/home');
                }else{
                    console.log(err.response)
                }

            }
            catch(e){
                swal ("Oops!","Algo salió mal","error");

            }
        }
    }
}
</script>

<style scoped>

.main-section{
    margin:0 auto;
    margin-top:25%;
    padding: 0;
}

.modal-content{
    background-color: #3b4652; 
    opacity: .90;
    padding: 0 20px;
    box-shadow: 0px 0px 3px #848484;
}
.user-img{
    margin-top:-50px;
    margin-bottom: 35px;
}
.user-img img{
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 3px #848484;
    border-radius: 50%;
    background-color: #3b4652;
}

.form-group input{
    height: 42px;
    font-size: 18px;
    border: 0;
    padding-left: 54px;
    border-radius: 5px;
}

.form-group::before{
    font-family:"Font Awesome\ 5 Free";
    position: absolute;
    left: 28px;
    font-size: 22px;
    padding-top: 4px;
}

.form-group#user-group::before{
    content: "\f007";
}

.form-group#password-group::before{
    content: "\f023";
}

button{
    width: 60%;
    margin: 5px 0 25px ;
}
</style>