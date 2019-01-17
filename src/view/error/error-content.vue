<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src"
           :alt="code">
      <div class="text-con">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import './error.less'
export default {
  name: 'error_content',
  components: {
  },
  props: {
    code: String,
    desc: String,
    src: String
  }
}
</script>
