import hljs from 'highlight.js'
import type { DirectiveBinding } from 'vue'

const directive = (el: HTMLElement, binding: DirectiveBinding) => {
  const codeNodes = el.querySelectorAll('code')

  for (let i = 0; i < codeNodes.length; i++) {
    const codeNode = codeNodes[i]

    if (typeof binding.value === 'string') {
      codeNode.textContent = binding.value
    }

    hljs.highlightBlock(codeNode)
  }
}

export default directive
