import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-extreme.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/dist/border.css'

tippy('#tippy', {
  content: 'Hire Me!',
  delay: [175, null],
  inertia: true,
  offset: [0, 15],
  animation: 'scale-extreme',
  theme: 'gradient',
})
