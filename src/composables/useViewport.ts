import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 768) return 'xs'
  if (width < 1024) return 'sm'
  if (width < 1440) return 'md'
  if (width < 1920) return 'lg'
  return 'xl'
}

export function useViewport() {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
  const breakpoint = computed<Breakpoint>(() => getBreakpoint(width.value))

  const handleResize = () => {
    width.value = window.innerWidth
    console.log('now breakpoint:', breakpoint.value)
    console.log('width:', width)
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('orientationchange', handleResize, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('orientationchange', handleResize)
  })

  return { width, breakpoint }
}
