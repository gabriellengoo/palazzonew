<template>
    <div class="skeleton-loader">
      <div class="skeleton-box" v-for="n in 3" :key="n"></div>
    </div>
  </template>
  
  <style>
  .skeleton-loader {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .skeleton-box {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    animation: shimmer 1.5s infinite linear;
  }
  @keyframes shimmer {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
  </style>
  