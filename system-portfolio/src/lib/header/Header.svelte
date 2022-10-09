<header>
	<div class="flex justify-between p-5" style="max-width: 100vw !important;">
		<h1 id="name">
			<a href="/" class="">
				Martin <div class="surname">&nbsp; Rougeron</div>
			</a>
		</h1>
		<div id="contact-container" class="flex flex-row-reverse">
			<div id="contact">
				<a href="/contact">Contact</a>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		color: white;
		font-weight: 900;
		font-size: 1.6rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		top: 0;
		z-index: 1;
	}

	#contact {
		position: relative;
	}

	#contact a {
		display: flex;
		height: 100%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	#contact a:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: white;
		transform-origin: bottom;
		transition: transform 0.25s ease-out;
	}

	#contact a:hover:after {
		transform: scaleX(1);
		transform-origin: bottom;
	}

	#contact a:focus:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #ffffff;
		transform-origin: bottom;
		transition: transform 0.25s ease-out;
	}

	#contact a:focus:after {
		transform: scaleX(1);
		transform-origin: bottom;
	}

	#contact a:active {
		text-shadow: 1px 1px 20px white;
	}

	#name {
		position: relative;
	}

	#name a {
		display: flex;
		height: 100%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	#name a:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: white;
		transform-origin: bottom;
		transition: transform 0.25s ease-out;
	}

	#name a:hover:after {
		transform: scaleX(1);
		transform-origin: bottom;
	}

	#name a:focus:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #ffffff;
		transform-origin: bottom;
		transition: transform 0.25s ease-out;
	}

	#name a:focus:after {
		transform: scaleX(1);
		transform-origin: bottom;
	}

	#name a:active {
		text-shadow: 1px 1px 20px white;
	}
	@media only screen and (max-width: 800px) {
		.surname {
			display: none;
		}
		header {
			font-size: 1.3rem;
			max-width: 100vw !important;
			background: white;
			color: #94bbe9;
		}
	}
</style>
