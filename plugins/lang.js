import { langRU } from '~/components/lang/en'
import { langEN } from '~/components/lang/ru'

export default ({ app }, inject) => {
  inject('t', {ru:langRU, en:langEN})
}
