/*
 * @Date: 2024-07-02 09:43:52
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-03 14:47:35
 * @Description: 
 */
import { makeInstaller } from '@bst-element/utils';

import components from './components';

import '@bst-element/theme/index.css'

const installer = makeInstaller(components);

export * from '../components'
export default installer;