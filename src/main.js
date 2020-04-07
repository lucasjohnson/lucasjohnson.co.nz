import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '~/assets/style/index.scss'
import DefaultLayout from '~/layouts/Default.vue'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faCodepen)

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
}
