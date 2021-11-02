import { defineComponent } from 'vue'

import { useLocaleProps, useLocale } from '@element-plus/hooks'
import { buildProp, definePropType } from '@element-plus/utils/props'
import { useButtonConfig } from '@element-plus/components/button'
import type { ButtonGlobalConfig } from '@element-plus/components/button'

export const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: {
    ...useLocaleProps,
    // Add more configs
    button: buildProp({
      type: definePropType<ButtonGlobalConfig>(Object),
      default: () => {
        return {
          autoInsertSpace: true,
        }
      },
    }),
  },

  setup(_, { slots }) {
    useLocale()
    useButtonConfig()
    return () => slots.default?.()
  },
})
