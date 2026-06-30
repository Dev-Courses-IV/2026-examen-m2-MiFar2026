<template>
  <div class="mt-4 space-y-4">
    <div
      v-for="info in noticiasPasado"
      :key="info.id"
      class="p-4 bg-amber-50 rounded-lg border border-amber-200 shadow-sm"
    >
      <h3 class="font-bold text-amber-950 text-sm mb-1">
        {{ info.titulo }}
      </h3>

      <button
        @click="abrirNoticiaCompleta(info)"
        class="mt-2 bg-amber-600 hover:bg-amber-700 text-white text-[10px] font-bold px-3 py-1.5 rounded transition-colors block w-full text-center"
      >
        📖 Leer Noticia Completa
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noticiasPasado: Array
  },

  methods: {
    abrirNoticiaCompleta(info) {
      this.$emit('leer-mas', info)
    }
  }
}
</script>