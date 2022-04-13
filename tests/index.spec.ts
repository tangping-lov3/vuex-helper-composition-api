import { store } from './store'
import App from './App.vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

describe('test helper', () => {
  test('useState without module', () => {
    const wrapper: any = mount(App, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.vm.count).toBe(0)
    wrapper.vm.increment()
    expect(wrapper.vm.count).toBe(1)
    wrapper.vm.actionIncrement()
    expect(wrapper.vm.count).toBe(2)
    expect(wrapper.vm.getterCount).toBe(4)
  })
  test('useState with module', () => {
    const wrapper: any = mount(App, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.vm.aCount).toBe(0)
    wrapper.vm.aIncrement()
    expect(wrapper.vm.aCount).toBe(1)
    wrapper.vm.aActionIncrement()
    expect(wrapper.vm.aCount).toBe(2)
    expect(wrapper.vm.aGetterCount).toBe(4)
  })
})
