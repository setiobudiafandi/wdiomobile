

describe('Open apps', () => {

    it('Access Accessibility Node Provider', async() => {
        await $('//android.widget.TextView[@content-desc="Accessibility"]').click()
        await $('//android.widget.TextView[@content-desc="Accessibility Node Provider"]').click()
        const elementText = await $('//android.widget.TextView[@content-desc="Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares."]').getText()
        await expect(elementText).toContain("Enable")
    })

    it('Input text on TextFields menu', async() => {
        await $('//android.widget.TextView[@content-desc="Views"]').click()
        await browser.pause(1000)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(2,8)')
        await browser.pause(1000)
        await $('//android.widget.TextView[@content-desc="TextFields"]').click()
        await browser.pause(1000)
        const text_field = await $('android.widget.EditText')
        await text_field.click()
        await browser.pause(3000)
        await text_field.setValue('Hello')
    })
})