<!--
 * @Date: 2024-07-03 17:17:13
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-03 18:04:54
 * @Description: 
-->
<template>
	<i
		class="bst-icon"
		:class="{[`bst-icon-${type}`]: type}"
		:style="customStyle"
		v-bind="$attrs"
	>
		<font-awesome-icon v-bind="filterProps"> </font-awesome-icon>
	</i>
</template>

<script setup lang="ts">
	import { omit } from 'lodash-es';
	import type { IconProps } from './types';
	import { computed } from 'vue';
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
	defineOptions({
		name: 'BstIcon',
		inheritAttrs: false,
	});
	const props = defineProps<IconProps>();
	const filterProps = computed(() => omit(props, ['type', 'color']));
	const customStyle = computed(() => ({
		color: props.color ?? void 0,
	}));
</script>

<style>
@import './index.css'
</style>
