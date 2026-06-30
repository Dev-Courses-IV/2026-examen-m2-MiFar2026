<template>
  <div class="min-h-screen bg-slate-100 font-sans antialiased text-slate-900">

    <header class="bg-pink-900 border-b border-slate-200 py-6 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1
          @click="paginaActual = 'inicio'"
          class="text-4xl font-serif font-black uppercase tracking-wider text-white cursor-pointer hover:opacity-90 transition-opacity"
        >
          Noticias Pasadofrescas
        </h1>

        <p class="text-sm text-pink-200 font-medium mt-1">
          Noticias a través del Tiempo: Historia, Política y Tecnología
        </p>

        <button
          v-if="paginaActual !== 'inicio'"
          @click="paginaActual = 'inicio'"
          class="mt-4 bg-white text-pink-900 text-xs font-bold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition-all uppercase tracking-wider"
        >
          ⬅️ Volver a la Portada Principal
        </button>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8">

      <div
        v-if="paginaActual === 'inicio'"
        class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
      >

        <section class="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-600">
          <div class="mb-4">
            <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded uppercase">
              Tiempo Pasado
            </span>

            <h2 class="text-2xl font-serif font-bold mt-2 text-amber-900">
              Sección: Historia
            </h2>
          </div>

          <TiempoPasado
            :noticiasPasado="arrayNoticias[0].noticias"
            @leer-mas="cambiarPagina"
          />
        </section>

        <section class="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
          <div class="mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded uppercase">
              Tiempo Presente
            </span>

            <h2 class="text-2xl font-serif font-bold mt-2 text-blue-900">
              Sección: Política
            </h2>
          </div>

          <TiempoPresente
            :noticiasPresente="arrayNoticias[1].noticias"
            @leer-mas="cambiarPagina"
          />
        </section>

        <section class="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
          <div class="mb-4">
            <span class="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded uppercase">
              Tiempo Futuro
            </span>

            <h2 class="text-2xl font-serif font-bold mt-2 text-purple-900">
              Sección: Tecnología
            </h2>
          </div>

          <TiempoFuturo
            :noticiasFuturo="arrayNoticias[2].noticias"
            @leer-mas="cambiarPagina"
          />
        </section>

      </div>

      <div
        v-else
        class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
      >
        <span class="text-xs font-bold px-3 py-1 rounded-full uppercase bg-pink-100 text-pink-800">
          Lectura Completa
        </span>

        <h1 class="text-3xl font-serif font-black text-slate-900 mt-4 mb-2">
          {{ noticiaSeleccionada.titulo }}
        </h1>

        <p class="text-sm text-slate-400 font-mono mb-6">
          Identificador de noticia: #{{ noticiaSeleccionada.id }}
        </p>

        <div class="text-slate-700 leading-relaxed text-lg space-y-4">
          <p>{{ noticiaSeleccionada.detalle }}</p>

          <p class="text-base text-slate-500 italic pt-4 border-t border-slate-100">
            Esta es la vista extendida e independiente solicitada para el desglose de la sección.
          </p>
        </div>
      </div>

    </main>

    <Footer />

  </div>
</template>

<script>
import TiempoPasado from './components/TiempoPasado.vue'
import TiempoPresente from './components/TiempoPresente.vue'
import TiempoFuturo from './components/TiempoFuturo.vue'
import Footer from './components/FooterView.vue'

export default {
  components: {
    TiempoPasado,
    TiempoPresente,
    TiempoFuturo,
    Footer
  },

  data() {
    return {
      paginaActual: 'inicio',
      noticiaSeleccionada: null,

      arrayNoticias: [
        {
          categoria: 'Historia',
          noticias: [
            {
              id: 101,
              titulo: 'Descubrimiento Arqueológico',
              detalle: 'Encuentran vasijas intactas del siglo III en la costa con inscripciones jeroglíficas únicas que cambiarán los libros de historia conocidos.'
            },
            {
              id: 102,
              titulo: 'Misterios Ancestrales',
              detalle: 'Nuevos estudios con radares térmicos revelan cámaras subterráneas y túneles ocultos laberínticos justo bajo las pirámides principales.'
            }
          ]
        },
        {
          categoria: 'Política',
          noticias: [
            {
              id: 201,
              titulo: 'Nuevas Elecciones Municipales',
              detalle: 'Los ciudadanos acuden en masa a las urnas este fin de semana con niveles de participación históricos para decidir las alcaldías clave del país.'
            },
            {
              id: 202,
              titulo: 'Acuerdo de Sostenibilidad',
              detalle: 'Se aprueba por unanimidad el nuevo plan ambiental internacional para reducir emisiones drásticamente antes de que termine la década.'
            }
          ]
        },
        {
          categoria: 'Tecnología',
          noticias: [
            {
              id: 301,
              titulo: 'Avance en Computación Cuántica',
              detalle: 'Científicos logran estabilizar procesadores por más tiempo batiendo récords de coherencia y abriendo la puerta a la criptografía indescifrable.'
            },
            {
              id: 302,
              titulo: 'IA en la Medicina',
              detalle: 'Algoritmos avanzados de visión médica predicen mutaciones celulares malignas con un 99% de precisión antes de que aparezcan físicamente.'
            }
          ]
        }
      ]
    }
  },

  methods: {
    cambiarPagina(noticiaObjeto) {
      this.noticiaSeleccionada = noticiaObjeto
      this.paginaActual = 'lectura'
    }
  }
}
</script>