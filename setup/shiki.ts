import { defineShikiSetup } from '@slidev/types'
import path from 'path';

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    // theme: await loadTheme(path.join(__dirname, './shiki-dark.json'))
    theme: 'one-dark-pro'
  }
})
