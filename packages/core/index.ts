/*
 * @Date: 2024-07-02 09:43:52
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-03 17:57:57
 * @Description: 
 */
import { makeInstaller } from '@bst-element/utils';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas } from '@fortawesome/free-solid-svg-icons'
import components from './components';

import '@bst-element/theme/index.css'
library.add(fas)
const installer = makeInstaller(components);

export * from '../components'
export default installer;