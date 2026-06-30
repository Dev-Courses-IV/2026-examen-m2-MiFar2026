<template>
  <div class="mt-4 space-y-4">
    <div
      v-for="info in noticiasPresente"
      :key="info.id"
      class="p-4 bg-blue-50 rounded-lg border border-blue-200 shadow-sm"
    >
      <h3 class="font-bold text-blue-950 text-sm mb-1">
        {{ info.titulo }}
      </h3>

      <button
        @click="abrirNoticiaCompleta(info)"
        class="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold px-3 py-1.5 rounded transition-colors block w-full text-center"
      >
        📖 Leer Noticia Completa
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noticiasPresente: Array
  },

  methods: {
    abrirNoticiaCompleta(info) {
      this.$emit('leer-mas', info)
    }
  }
}
</script>