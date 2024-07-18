describe('Open apps', () => {
    it('Access Accessibility Node Provider', async() => {
        await $('//android.widget.TextView[@content-desc="Accessibility"]').click()
    })
})