export default function (Alpine) {
  Alpine.directive('emerge', async (el, { value, expression }, { effect, evaluateLater }) => {
    if (!_D) {
      return
    }

    const root = el.content.firstElementChild
    const cid = root.getAttribute('emerge-cid')
    const extra = root.getAttribute('emerge-extra')

    if (cid && value === 'if') {
      // Lazy load component only when the if-statement
      // expression evaluates to a truthy value
      const evaluator = evaluateLater(expression)

      effect(() => {
        evaluator((evaluated) => {
          if (evaluated) {
            resolve()
          }
        })
      })
    } else {
      resolve()
    }

    async function resolve() {
      if (cid) {
        await _D.emerge(cid, root, extra ? JSON.parse(extra) : undefined)
      }

      el.removeAttribute(`x-emerge:${value}`)
      setTimeout(() => el.setAttribute(`x-${value}`, expression))
    }
  })
}
