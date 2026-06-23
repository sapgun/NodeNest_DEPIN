export function scrollToSection(selector: string) {
  const element = document.querySelector(selector)
  if (!element) return

  const offsetTop = element.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top: offsetTop, behavior: "smooth" })
}