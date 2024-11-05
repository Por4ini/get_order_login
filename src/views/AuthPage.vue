<template>
    <div class="auth-page">
      <div class="background-circles">
        <div class="ellipse ellipse1"></div>
        <div class="ellipse ellipse2">
          <div class="food-icon icon-top-1">🍣</div>
          <div class="food-icon icon-top-2">🌯</div>
          <div class="food-icon icon-top-3">🌮</div>
          <div class="food-icon icon-top-4">🧆</div>
          <div class="food-icon icon-top-5">🍱</div>
          <div class="food-icon icon-top-6">🍝</div>
          <div class="food-icon icon-bottom-1">🥡</div>
          <div class="food-icon icon-bottom-2">🥤</div>
          <div class="food-icon icon-bottom-3">🍰</div>
          <div class="food-icon icon-bottom-4">🌭</div>
          <div class="food-icon icon-bottom-5">🍩</div>
          <img src="@/assets/img/agregators_ico/foody_delivery.svg" alt="FoodyDelivery" class="agregator-ellipse4-icon icon-bottom-6">
        </div>
        <div class="ellipse ellipse3">
          <div class="food-icon icon-left-left1">🍔</div>
          <img src="@/assets/img/agregators_ico/wolt.svg" alt="Wolt" class="agregator-ellipse3-icon icon-left-left2" />
          <div class="food-icon icon-left-left3">🍟</div>
          <img src="@/assets/img/agregators_ico/loko.svg" alt="Loko" class="agregator-ellipse3-icon icon-left-left4" />
          
          <img src="@/assets/img/agregators_ico/uber.svg" alt="Uber" class="agregator-ellipse3-icon icon-right-right1" />
          <div class="food-icon icon-right-right2">🥙</div>
          <img src="@/assets/img/agregators_ico/shipday.svg" alt="Shipday" class="agregator-ellipse3-icon icon-right-right3" />
          <div class="food-icon icon-right-right4">🍕</div>
        </div>
        <div class="ellipse ellipse4">
          <img src="@/assets/img/agregators_ico/bolt.svg" alt="Bolt" class="agregator-ellipse4-icon icon-left" />
          <img src="@/assets/img/agregators_ico/glovo.svg" alt="Glovo" class="agregator-ellipse4-icon icon-right" />
        </div>
      </div>
      
      <div class="auth-content">
        <LoginComponent />
      </div>
    </div>
  </template>
  
  <script>
  import '@/assets/css/auth.css';
  import LoginComponent from '@/components/LoginСomponent.vue';


  export default {
    name: "AuthPage",
    components: {
    LoginComponent,
  },
  };
  </script>

  