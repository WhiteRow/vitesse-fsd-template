import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import Previewer from 'virtual:vue-component-preview'
import type { UserModule } from '~/types'
import App from '~/app/App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import '~/app/styles/main.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./app/modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
  },
)
