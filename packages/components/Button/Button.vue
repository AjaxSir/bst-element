<!--
 * @Date: 2024-07-01 18:28:50
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-03 17:53:54
 * @Description: 
-->
<template>
	<component
		:is="tag"
		:ref="_ref"
		class="bst-button"
		:autofocus="autofocus"
		:type="tag === 'button' ? nativeType : void 0"
		@click="(e: MouseEvent) => useThrottle ? handleThrottleClick(e) : handleClick(e)"
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
	<template v-if="loading">
		<slot name="loading">
			<bst-icon
				class="loading-icon"
				:icon="loadingIcon ?? 'spinner' "
				spin
				size="1x"
				:style="iconStyle"
			 />
		</slot>
	</template>
	<bst-icon v-if="icon || !loading" :icon="icon" size="1x" :style="iconStyle" />
		<slot></slot>
	</component>
</template>

<script setup lang="ts">
	import type { ButtonProps, ButtonEmit, ButtonInstance } from './type.ts';
	import { ref, computed } from 'vue' 
	import { throttle } from 'lodash-es'
	import BstIcon  from '../Icon/Icon.vue'
	defineOptions({
		name: 'BstButton',
	});

	const props = withDefaults(defineProps<ButtonProps>(), {
		tag: "button",
		nativeType: "button",
		useThrottle: true,
		throttleDuration: 500
	})

	const emits = defineEmits<ButtonEmit>();

	const slots = defineSlots()

	const _ref = ref<HTMLButtonElement>()

	defineExpose<ButtonInstance>({
		ref: _ref,
	})

	const handleClick = (e:MouseEvent) => {
		console.log(e)
		emits('click', e)
	}

	const iconStyle = computed(() => ({ marginRight: slots.default ? '8px' : '0' }))

	const handleThrottleClick = throttle(handleClick, props.throttleDuration)

</script>

<style scoped>
@import './index.css'
</style>
