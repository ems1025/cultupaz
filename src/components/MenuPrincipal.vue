<template>
  
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-menu  rounded" aria-label="Eleventh navbar example">
        <div class="container-fluid ">
            <img class="img-fluid img-logo" src="@/assets/img/Logo.png"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Artesanias</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="#">Psicologo</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="#"></a>
                </li>
                
            </ul>
            <div class="me-3">
                <button class="btn btn-option1">Registro</button>
                <button class="btn btn-option2 me-4">Inicio sesion</button>
            </div>
            </div>
            
        </div>
    </nav>
  </div>
</template>

<script >
import 'bootstrap/dist/css/bootstrap.css'
export default {

}
</script>

<style scoped>

.bg-menu{
    background: #00324D;
    font: 700 0.875rem/0.875rem "Open Sans", sans-serif ;
    font-size: 0.96em;
}
.navbar-nav{
    --bs-nav-link-color:white !important;
    
}
.nav-link:hover{
    color: #82DEF0 !important;

}
.img-logo{
    width:6rem;
	height: 5rem;
    margin:10px 50px 10px 20px;
}
.btn{
    font: 700 0.875rem/0.875rem "Open Sans", sans-serif !important;
    font-size: 0.96em;
}
.btn-option1{
    color: white !important;
}
.btn-option2{
    color: white !important;
    border-bottom: 2px solid white !important;
    border-radius: 5px;
}
.btn-option1:hover{
    color: #82DEF0 !important;
}
.btn-option2:hover{
    color: #82DEF0 !important;
    border-bottom: 2px solid #82DEF0 !important;
}
</style>