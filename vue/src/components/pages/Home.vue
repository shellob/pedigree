<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <div class="popover-container">
        <button @click="() => openHelpModal()">Open modal</button>
        <PopOver>
          <template v-slot:button>
            <div>Отчество: Фамилия И. О.</div>
          </template>
          <template v-slot:popover>
            <div>Фамилия Имя Отчество</div>
            <div>01.01.1920 - 01.01.2020</div>
            <div>id: 100</div>
          </template>
        </PopOver>
      </div>
    </section>
  </PageLayout>
</template>


<script>
import PageLayout from '../parts/PageLayout'
import PopOver from "@/components/ui/PopOver";
import { helpModal } from "@/mixins/modals";

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    PopOver 
  }
}
</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');

.p-16 {
  padding: 16px;
}

.popover-button {
  background-color: #4CAF50; 
  color: white; 
  padding: 10px 20px; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  outline: none; 
}

.popover-container {
  position: relative; 
  display: inline-block; 
}

.popover-content {
  position: absolute;
  top: 100%;
  left: 50%; 
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  padding: 16px;
  width: auto;
  z-index: 1000;
  margin-top: 10px; 
}

@media (max-width: 600px) {
  .popover-button {
    padding: 5px 10px;
    font-size: 12px;
  }
}

@media (min-width: 1200px) {
  .popover-button {
    padding: 15px 30px;
    font-size: 18px;
  }
}
</style>
