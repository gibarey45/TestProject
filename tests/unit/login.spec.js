import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe("Check Login", ()=>{
    it("login", async()=>{
        // Create instance of component
        const wrapper = shallowMount(Login)
        wrapper.find("[data-username]").setValue('cr7')
        wrapper.find("[data-password]").setValue('123456')
        wrapper.find("form").trigger("submit.prevent")
        await wrapper.vm.$nextTick()
        // wrapper.find({ name: 'signInButton' }).trigger('click')
    })
})