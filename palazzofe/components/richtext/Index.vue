<template>
  <!-- p-[2vw] -->
  <div class="">
    <PortableText :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import PhoneLink from './PhoneLink'

export default {
  components: {
    PortableText,
  },
  props: {
    blocks: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      serializers: {
        marks: {
          link: ExternalLink,
          // internalLink: InternalLink,
          // strong: ({ children }) => <strong style="font-family: 'GTWalsheimbb';">{children}</strong>,
          // link: ({ mark, children }) => {
          //   // Check if it's a phone link
          //   if (mark.href && mark.href.startsWith('tel:')) {
          //     return <a href={mark.href}>{children}</a>;
          //   }
          //   // Handle external links using ExternalLink component
          //   return <ExternalLink href={mark.href}>{children}</ExternalLink>;
          // },
          internalLink: InternalLink,
          phoneLink: PhoneLink,
          strong: ({ children }) => <strong style="font-family: 'GTWalsheimbb';">{children}</strong>,
        },
      },
    }
  },
}
</script>
<style scoped>
.lay1text div p:nth-child(1){
  font-size: 1.6vw;
  font-weight: bolder;
}

.lay2text div p:nth-child(1){
  font-size: 1.6vw;
  /* font-weight: bolder; */
  line-height: 2vw;
  /* width: 68%; */
  font-family: 'NHaas' !important;
}

.underimglay1 p{
  font-size: 1vw !important;
}

.underimglay1{
  padding-top: 0vw !important;
}
.contactinnerpressslug div p{
  padding-bottom: 0.5vw !important;
  line-height: normal;
}

.contactinnerpressslug p{
  padding-bottom: 0.5vw !important;
  line-height: normal;
}

.contactinnerpressslug p a{
  padding-bottom: 0.5vw !important;
  line-height: normal !important;
}

.adsize div p:nth-child(2){
  font-size: 1.05vw;
}

.adsize div p:nth-child(3){
  font-size: 1.05vw;
}

.adsizemb div p:nth-child(1){
  font-size: 3.5vw;
}
/* p:not(:first-of-type) {
  text-indent: 1rem;
} */

.richcont div p {
 padding-bottom: 2vh;
}

div p{
/* padding-bottom: 2.5vh; */
/* font-family: 'MinionPro-Regular'; */
}

@media only screen and (max-width: 768px) {
  .lay1text div p:nth-child(1){
  font-size: 3vw;
  font-weight: bolder;
}

.lay2text div p:nth-child(1){
  font-size: 4vw;
  /* font-weight: bolder; */
  line-height: 5vw;
  /* width: 68%; */
  font-family: 'NHaas' !important;
}

.underimglay1 p{
  font-size: 3vw !important;
}
  /* div p{
padding-bottom: 1.5vh;
} */
.adsize div p:nth-child(2){
  font-size: 2.05vw;
}

.adsize div p:nth-child(3){
  font-size: 2.05vw;
}

.adsizemb div p:nth-child(1){
  font-size: 4vw;
  line-height: normal;
}
}

p{
  /* font-family: 'GTWalsheimcr'; */
  /* font-family: 'GTWalsheimbb'; */
  /* line-height: 4.3rem; */
  /* text-transform: uppercase; */
  /* text-indent: 10vw; */
  /* display: flex; */
  /* text-align: right; */
  /* text-align: justify; */
}


</style>
<!-- <style scoped lang="css">
p:not(:first-of-type) {
  text-indent: 1rem;
}
</style> -->
