<script setup lang="ts">
interface Props {
  title: string;
  width: number;
  height: number;
  src1x: string;
  src2x: string;
}
defineProps<Props>();
</script>

<template>
  <div class="masonry__brick">
    <div class="item-folio">
      <div class="item-folio__thumb">
        <a
          :href="src1x"
          class="thumb-link"
          :title="title"
          :data-size="`${width}x${height}`"
        >
          <img :src="src1x" :srcset="`${src1x} 1x, ${src2x} 2x`" />
          <span class="shadow-overlay"></span>
        </a>
      </div>

      <div class="item-folio__text">
        <h3 class="item-folio__title">The Beetle</h3>
      </div>

      <div class="item-folio__caption">
        <p>
          Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus
          iusto quo.Unde dolorem corrupti neque nisi.
        </p>
      </div>
    </div>
    <!-- end item-folio -->
  </div>
  <!-- end masonry__brick -->
</template>
