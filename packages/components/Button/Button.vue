<!--
 * @Date: 2024-07-01 18:28:50
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-02 14:04:56
 * @Description: 
-->
<template>
	<component
		:is="props.tag"
		:ref="_ref"
		class="bst-button"
		:type="tag === 'button' ? nativeType : void 0"
		:class="{
			[`bst-button--${type}`]: type,
			[`bst-button--${size}`]: size,
			'is-disabled': disabled,
			'is-circle': circle,
			'is-plain': plain,
			'is-loading': loading,
			'is-round': round,
		}"
		:disabled="disabled || loading  ? true : void 0"
	>
		<slot></slot>
	</component>
</template>

<script setup lang="ts">
	import type { ButtonProps } from './type.ts';
	import { ref } from 'vue' 
	defineOptions({
		name: 'BstButton',
	});

	const props = withDefaults(defineProps<ButtonProps>(), {
		tag: "button",
		nativeType: "button",
	})

	const slots = defineSlots()

	const _ref = ref<HTMLButtonElement>()


</script>

<style scoped>
@import './index.css'
</style>
