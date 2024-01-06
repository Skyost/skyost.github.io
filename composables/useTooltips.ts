export const useTooltips = () => {
  onMounted(() => {
    // @ts-ignore
    const Tooltip = useNuxtApp().$bootstrap.tooltip
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    for (const tooltip of tooltips) {
      // eslint-disable-next-line no-new
      new Tooltip(tooltip)
    }
  })
}
