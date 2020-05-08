import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"

describe("FormSubmitter", () => {
    it("reveals a notification when submitted", async () => {
        // Create instance of component
        const wrapper = shallowMount(FormSubmitter)
        // Search username in component and set value
        wrapper.find("[data-username]").setValue("Cristiano Ronaldo")
        //Event submit to send data
        wrapper.find("form").trigger("submit.prevent")
        //Notice after calling trigger, we do await wrapper.vm.$nextTick().
        // This is why we had to mark the test as async - so we can use await.
        // As of vue-test-utils beta 28, you need to call nextTick to ensure Vue's reactivity system updates the DOM.
        // Sometimes you can get away without calling nextTick, but if you components start to get complex,
        // you can hit a race condition and your assertion might run before Vue has updated the DOM
        await wrapper.vm.$nextTick()

        //Message.
        expect(wrapper.find(".message").text())
            .toBe("Thank you for your submission, Cristiano Ronaldo.")
    })
})