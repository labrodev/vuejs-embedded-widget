<template>
  <!--Link to compiled style.css-->
  <link rel="stylesheet" href="http://vuejs-embedded-widget/style.css">

  <CountDown 
      :date="props.date"
      :title="props.title"
      :end="props.end" 
      :color="props.color" />
</template>

<script setup>
  import CountDown from "@/components/CountDown.vue";

  // Import required functions from Vue
  import {  defineProps } from 'vue';

  // Define props for the component
  const props = defineProps({
      date: {
          type: String,
          required: true
      },
      title: {
          type: String,
          required: true
      },
      end: {
          type: String,
          required: false,
          defaut: 'Countdown is end.'
      },
      color: {
          type: String,
          required: false,
          default: '#FF0000'
      }
  });
</script>
