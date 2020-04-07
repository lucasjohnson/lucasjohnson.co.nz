<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="~/assets/images/author.png" width="180" height="180" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			Lucas Johnson
		</h1>

		<p class="author__intro">
			Front End Developer too busy to build his own site.
		</p>

		<p class="author__intro">
			Recently launched this incredible site with the team at MediaMonks: <a href="https://www.omen.com/" target="_black" rel="noopener noreferrer" title="OMEN.com opens in new tab">OMEN.com</a>
		</p>

		<p class="author__links">
			<a href="https://github.com/lucasjohnson" target="_black" rel="noopener noreferrer" title="GitHub opens in new tab">
				<font-awesome :icon="['fab', 'github']"/>
			</a>

			<a href="https://codesandbox.io/u/lucasjohnson" target="_black" rel="noopener noreferrer" title="CodeSandbox opens in new tab">
				<font-awesome :icon="['fab', 'codepen']"/>
			</a>
			<a href="https://twitter.com/_lucasjohnson" target="_black" rel="noopener noreferrer" title="Twitter opens in new tab">
				<font-awesome :icon="['fab', 'twitter']"/>
			</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
