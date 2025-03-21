export function DOMLoaded(callback: () => void) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  }
  else {
    callback()
  }
}
