<template>
  <div class="popover-container">
    <div class="button-slot" @mouseover="show = true" @mouseleave="show = false">
      <slot name="button"></slot>
    </div>
    <transition name="fade">
      <div v-if="show" class="popover-slot">
        <slot name="popover"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="less" scoped>
@button-background: #4CAF50;
@button-hover-background: #367C39;
@popover-background: white;
@popover-border-color: #ccc;
@shadow-color: rgba(0, 0, 0, 0.1);
@transition-speed: 0.3s;
@popover-offset: 10px;
@transform-offset: -50%;

.popover-container {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(@transform-offset);
  z-index: 1000;

  .button-slot {
    background-color: @button-background; 
    color: white;
    padding: 10px 15px;
    border-radius: 20px; 
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
    transition: background-color @transition-speed ease; 

    &:hover {
      background-color: @button-hover-background; 
    }
  }

  .popover-slot {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(@transform-offset);
    background-color: @popover-background;
    border: 1px solid @popover-border-color;
    border-radius: 10px;
    box-shadow: 0 4px 8px @shadow-color;
    width: 200px; 
    padding: 10px;
    margin-top: @popover-offset; 
    box-sizing: border-box;
    transition: opacity @transition-speed ease, transform @transition-speed ease; 
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity @transition-speed ease, transform @transition-speed ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
