<script setup lang="ts">
  import { useMapState, useMapMutations, useMapActions, useMapGetters } from '../src/index'
  const { count } = useMapState(['count'])
  const { increment } = useMapMutations(['increment'])
  const { increment: actionIncrement } = useMapActions(['increment'])
  const { count: getterCount } = useMapGetters(['count'])
  const { count: aCount } = useMapState('a', ['count'])
  const { increment: aIncrement } = useMapMutations('a', ['increment'])
  const { increment: aActionIncrement } = useMapActions('a', ['increment'])
  const { count: aGetterCount } = useMapGetters('a', ['count'])
</script>

<template>
  <div></div>
</template>