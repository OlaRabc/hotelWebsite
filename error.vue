<template>
    <FrError404 />

    <FrError404 v-if="(error.statusCode = '404')" />
    <FrError500 v-else-if="(error.statusCode = '500')" />
    <FrErrorUndefined v-else :error="error.statusCode"/>
  </template>
  
  <script>
  export default { props: ["error"] };
  </script>