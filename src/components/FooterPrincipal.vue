<template>
  <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-col first">
                        <h5>Acerca de la sincronización</h5>
                        <p class="p-small">CULTUPAZ es una plantilla HTML de página de 
                            destino creada con Bootstrap 4 para presentar aplicaciones móviles</p>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col second">
                        <h5>Datos de contacto</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li class="media">
                                <i class="bi bi-geo-alt-fill"></i>
                                <div class="media-body">85 Innovation Street, CA, EE. UU.</div>
                            </li>
                            <li class="media">
                                <i class="bi bi-envelope-fill"></i>
                                <div class="media-body"><a href="#your-link">isaacddz14@gmail.com</a></div>
                            </li>
                            <li class="media">
                                <i class="bi bi-telephone-fill"></i>
                                <div class="media-body"><a href="#your-link">+57 3117557590</a></div>
                            </li>
                        </ul>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col third">
                        <h5>Enlaces de valor</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li><a href="terms-conditions.html">Términos y condiciones</a></li>
                            <li><a href="privacy-policy.html">Política de privacidad</a></li>
                            <li><a href="article-details.html">Detalles del artículo</a></li>
                        </ul>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col fourth">
                        <h5>Otras aplicaciones</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li><a href="#your-link">-----------</a></li>
                            <li><a href="#your-link">-----------</a></li>
                            <li><a href="#your-link">-----------</a></li>
                        </ul>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col fifth">
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab bi bi-facebook fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab  bi bi-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab bi bi-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> <!-- end of footer-col -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of footer -->
    <!-- end of footer -->
</template>

<script>
export default {

}
</script>

<style scoped>
h5 {
	font: 700 1.125rem/1.625rem "Open Sans", sans-serif !important;
}
.footer {
	padding-top: 4rem;
	padding-bottom: 1rem;
	border-top: 1px solid #c8d4d6;
	background-color: #dfe9f3;
    text-align: left;
}

.footer p,
.footer h5,
.footer ul,
.footer a {
	color: #00324D;
}

.footer a {
	text-decoration: none;
}

.footer .footer-col {
	display: inline-block;
	width: 14.5rem;
    margin-right: 1rem;
	margin-bottom: 1.5rem;
    vertical-align: top;
}

.footer h5 {
	margin-bottom: 0.625rem;
}

.footer .li-space-lg li {
	margin-bottom: 0.375rem;
}

.footer .list-unstyled .fab,
.footer .list-unstyled .fas {
	width: 0.875rem;
	font-size: 0.875rem;
	line-height: 1.5rem;
}

.footer .list-unstyled .media-body {
	margin-left: 0.625rem;
}

.footer .fa-stack {
	width: 2em;
	margin-bottom: 0.75rem;
	margin-right: 0.390rem;
	font-size: 1.25rem;
}
.fab {
    font-family: 'Font Awesome 5 Brands';
    background: #999;
    padding: 10px;
    border-radius: 100%;
}
.footer .fa-stack .fa-stack-1x {
    color: #fff;
	transition: all 0.2s ease;
}

.footer .fa-stack .fa-stack-2x {
	color: #999 !important;
	transition: all 0.2s ease;
}

.footer .fa-stack:hover .fa-stack-1x {
	color: #fff;
}

.footer .fa-stack:hover .fa-stack-2x {
    color: #555;
}


/* Footer */
.footer .footer-col.first {
		display: inline-block;
		width: 14rem;
		margin-right: 2.5rem;
	}
	
	.footer .footer-col.second {
		width: 14rem;
		margin-right: 2.25rem;
	}


	.footer .footer-col.third,
	.footer .footer-col.fourth {
		width: 8.5rem;
		margin-right: 3.25rem;
	}

	.footer .fa-stack:last-of-type {
		margin-right: 0;
	}

	.footer .footer-col.fifth {
		width: 12rem;
		margin-right: 0;
	}
.p-small {
    font: 400 0.875rem/1.5rem "Open Sans", sans-serif;
}
</style>