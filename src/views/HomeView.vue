<template>
<div class="row-hero">
    <video class="video" poster="" autoplay playsinline muted loop>
      <source src="@/assets/marveltheme.mp4" type="video/webm">
    </video>
                  <div class="col-md-12">
                    <div class="site-heading text-center margin">
                        <h2 class="text-white">WE ARE <span>MARVEL INC</span></h2>
                        <h4 class="text-white">The one stop shop for all your hero needs</h4>
                    </div>
                </div>
</div>
<Services/>
</template>

<script>
// @ is an alias to /src
import Services from '@/components/Services.vue'

export default {
  components: {
    Services
  }
}
</script>

<style>
html, body {
	margin: 0;
	padding: 0;
	height: 100%;
	font-family: Arial;
}

.row-hero {
	height: 20rem;
	width: 100%;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
	@media(min-width: 250px) {
		.row-hero {
			height: 25rem;
		}
    .margin{
      margin-top: 50rem !important;
 
      font-size: 5;
    }
	}
	@media(min-width: 720px) {
		.row-hero {
			height: 35rem;
		}
	}

.video {
	position: absolute;
	top: 50%;
	left: 50%;
	height: 100vh;
	width: 100vw;
	z-index: -1;
	transform: translateX(-50%) translateY(-50%);
	min-width: 100%;
	min-height: 100%;
}
.margin{
 margin-bottom: 15rem !important;
 background-color: rgba(0, 0, 0, 0.6);
 	padding: .5rem 1rem;
}

/* .video-quote {
	z-index: 1;
	padding: .5rem 1rem;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.6);
} */

</style>

