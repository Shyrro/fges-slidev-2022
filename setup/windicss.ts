import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
//   shortcuts: {
//     // custom the default background
//     'bg-main': 'bg-[#181b1f] text-[#ddd]',
//   },
shortcuts: {
    // custom the default background
    'bg-main': 'bg-[#ddd] text-[#101924] dark:bg-[#1a283b] dark:text-[#ddd]',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code"',
      },
    },
  },
}))