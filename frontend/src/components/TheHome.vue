<template>
<div class="all">
   
    <div class="container">
       <p class="pt-5">
           <strong> Bienvenido </strong> {{ user.name }}
        </p>
       <p class="mt-5">
           Contacto: <br>{{ user.email }}
        </p>
    </div>
     <nav>
        <button
        type="submit"
        @click.prevent="logout"
        >Cerrar sesion</button> 
    </nav>
</div>
</template>

<script>
export default {
    data(){
        return{
            user:{
            }
        }
    },
    methods:{
        getUserDetails(){
            let user = localStorage.getItem('user');
            let token = localStorage.getItem('jwt');
            console.log(JSON.parse(user));
            if(token){
                this.user = JSON.parse(user);
            }
        },
        logout(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/');
        }
    },
    created(){
        this.getUserDetails();
    }
}
</script>

<style scoped>
.all {
    width: 100vw;
    height: 100vh;
    background-image: url('https://raw.githubusercontent.com/Hamilcer/nothing/9eee0afbc13ff390a081745ba1170326db7483f5/background.svg');
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position-y: -130px;
    font-family: 'Poppins', sans-serif;
    padding-top: 2%;
    
}
.container {
    background: #F6F8FA;
    width: 611px;
    padding: 0 5% 5% 5%;
    border-radius: 10px;
    box-shadow: 0 0 8px 0px black;
    margin-bottom: 2%;
}
p {
    animation-name: appear;
    animation-duration: 2.5s;
    font-size: 40px;
    color: #111111;
}
@keyframes appear {
from {
    color: transparent;
}
to {
    font-size: 40px;
  }
}
button {
    color: #333333;
    border: none;
    width: 20%;
    padding: 6px;
    border-radius: 100px;
    background: transparent;
    font-size: 25px;
    border: 3px solid white;
}
button:hover {
    animation-name: but;
    animation-duration: .2s;
    color: white;
}
@keyframes but {
    from {
        color: black;
    }
    to {
        color: white;
    }
}
</style>