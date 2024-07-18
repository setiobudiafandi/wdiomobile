describe('Open apps', () => {

    it('Access Accessibility Node Provider', async() => {
        await $('//android.widget.TextView[@content-desc="Accessibility"]').click()
        await $('//android.widget.TextView[@content-desc="Accessibility Node Provider"]').click()
        const elementText = await $('//android.widget.TextView[@content-desc="Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares."]').getText()
        await expect(elementText).toContain("Enable")
    })
})