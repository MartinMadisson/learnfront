<script setup>

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

</script>


<template>
<div class="tabs is-centered">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
  
  
</template>