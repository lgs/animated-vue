import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-out-up-big', undefined, 'fadeOutUpBig')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-out-up-big', undefined, 'fadeOutUpBig', true)

export default { single, group }
