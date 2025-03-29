<template>
  <FrError404 v-if="(error.statusCode = '404')" />
  <FrError500 v-else-if="(error.statusCode = '500')" />
</template>

<script>
export default { props: ["error"] };
</script>
