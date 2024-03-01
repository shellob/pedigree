<template>
  <PageLayout>
    <section class="home-page__section">
      Homepage
      <button @click="openHelpModal" class="home-page__button">Open modal</button>
    </section>
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
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/parts/PageLayout';
import PopOver from "@/components/ui/PopOver";
import { helpModal } from "@/mixins/modals";

export default {
  name: 'HomePage',
  components: {
    PageLayout,
    PopOver
  },
  mixins: [helpModal],
}
</script>

<style scoped>
.home-page__section {
  padding: 16px;
}

.home-page__popover-content {
  margin-top: 10px;
}
</style>
