export default function scrollToBottom(el: HTMLElement) {
  if (!el) return
  el.scrollTop = el.scrollHeight
}
