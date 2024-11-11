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
.teambios{
  line-height: 1.7vw;
}

.lay1subtext{
  font-size: 1.4vw;
  font-weight: bolder;
  font-family: 'RomainTextTrial';
  /* line-height: normal; */
}



.lay2text div p:nth-child(1){
  font-size: 1.6vw;
  /* line-height: 2vw; */
  font-family: 'RomainTextTrial';
}

.lay3text div p:nth-child(1){
  font-size: 1.6vw;
  /* line-height: 2vw; */
  font-family: 'NHaas' !important;
}

.lay3subtext{
  font-size: 1.5vw !important;
  font-family: 'NHaas' !important;
  /* line-height: normal; */
}

.laytextall p{
  font-size: 1.5vw;
  /* font-weight: bolder; */
  /* line-height: 2vw; */
  /* width: 68%; */
  font-family: 'NHaas' !important;
  justify-content: center;
    display: flex;
    text-align: center;
    /* line-height: normal; */
}

.underimglay1 p{
  font-size: .9vw !important;
  font-family: 'NHaas' !important;
}

.imtitle p{
  font-size: 1.1vw !important;
    font-family: 'RomainHeadlineTrial';
    font-family: 'GT-Sectra-Book-Italic'!important;
    text-decoration: underline;
}

.imtitle2 p:last-child{
  font-size: 1.15vw !important;
    font-family: 'RomainHeadlineTrial';
    font-family: 'GT-Sectra-Book-Italic'!important;
    text-decoration: underline;
}

.underimglay3 p{
  font-size: .9vw;
  font-family: 'NHaas';
}

.underimglay3 p:nth-child(1){
  font-size: auto !important;
  font-family: auto !important;
  padding-bottom: 2vw !important;
}


.underimglay2 div p:nth-child(1){
  font-size: .9vw !important;
  font-family: 'NHaas' !important;
}

.underimglay1{
  padding-top: 0vw !important;
  padding-bottom: 0vw !important;
}

.imtitle p{
  padding-bottom: 0vw !important;
}

.contactinnerpressslug div p{
  padding-bottom: 1.3vw !important;
  /* line-height: normal; */
  letter-spacing: .5px;
}

.contactinnerpressslug p{
  /* padding-bottom: 0.5vw; */
  /* line-height: normal; */
}

.contactinnerpressslug p br{
  /* padding-bottom: 0.5vw; */
  /* line-height: normal; */
}

.contactinnerpressslug p a{
  padding-bottom: 0.5vw !important;
  /* line-height: normal !important; */
}

.aboveflower p{
  padding-bottom: 0;
}

.lay3subtext div p{
  padding-bottom: 0.2vw !important;
  letter-spacing: 2px;
}

.layouts{
  font-family: "GT-Sectra-Book";
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
  .laytextall p{
    font-size: 5.5vw;
    /* line-height: 6vw; */
  }

  .imtitle2 p:last-child{
    font-size: 3vw !important;
  }

  .submblay2 div{
  display: flex;
  flex-direction: row;
}

.mainmblay2{
  width: 100% !important;
}

.submblay2:nth-child(1){
  padding-right: 5vw;
}


  /* .lay1subtext{
  font-size: 4vw;
  font-weight: bolder;
} */


.lay1subtext {
        font-size: 5vw;
        font-weight: bolder;
        width: 54%;
    }

.lay2text div p:nth-child(1){
  font-size: 4vw;
  /* font-weight: bolder; */
  /* line-height: 5vw; */
  /* width: 68%; */
  font-family: 'NHaas' !important;
}

.lay3text div p:nth-child(1){
  font-size: 4vw;
  /* font-weight: bolder; */
  /* line-height: 5vw; */
  /* width: 68%; */
  font-family: 'NHaas' !important;
}

.laytextall p{
  font-size: 4vw;
  /* line-height: 5vw; */
}

.underimglay3 p{
  font-size: 3vw;
}

.underimglay1 p{
  font-size: 3vw !important;
}

.underimglay2 div p:nth-child(1){
  font-size: 3vw !important;
  font-family: 'NHaas' !important;
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
  /* line-height: normal; */
}

.lay3subtext p{
  font-size: 4vw;
  /* line-height: normal; */
}

.mblay3col5pad{
  padding-top: 10vw;
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
