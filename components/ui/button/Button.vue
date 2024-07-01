<!-- <script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '@/utils'
import { type ButtonVariants, buttonVariants } from '.'


interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template> -->

<script setup lang="ts">
import { cn } from '@/utils'
import { buttonVariants } from '.'

interface Props {
	variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
	size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
	as?: string
}

withDefaults(defineProps<Props>(), {
	as: 'button',
})
</script>

<template>
	<component
		:is="as"
		:class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
	>
		<slot />
	</component>
</template>