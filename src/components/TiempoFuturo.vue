<template>
  <div class="mt-4 space-y-4">
    <div
      v-for="info in noticiasFuturo"
      :key="info.id"
      class="p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-sm"
    >
      <h3 class="font-bold text-purple-950 text-sm mb-1">
        {{ info.titulo }}
      </h3>

      <button
        @click="abrirNoticiaCompleta(info)"
        class="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-bold px-3 py-1.5 rounded transition-colors block w-full text-center"
      >
        📖 Leer Noticia Completa
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noticiasFuturo: Array
  },

  methods: {
    abrirNoticiaCompleta(info) {
      this.$emit('leer-mas', info)
    }
  }
}
</script>