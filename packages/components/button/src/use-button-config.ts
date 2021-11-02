import { provide, inject, getCurrentInstance, computed, shallowRef } from 'vue'
import { ButtonGlobalConfigInjectionKey } from './button'
import type { ButtonGlobalConfig } from './button'

export function useButtonConfig() {
  const vm = getCurrentInstance()!
  const props = vm.props as {
    button: ButtonGlobalConfig
  }
  const config = computed(() => props.button)
  provide(ButtonGlobalConfigInjectionKey, config)
}

export function useButtonConfigInject() {
  const config = inject(
    ButtonGlobalConfigInjectionKey,
    shallowRef({
      autoInsertSpace: true,
    })
  )
  return config
}
