


describe('Sample', () => {
    it('should work', async () => {
        const mock = jest.fn(async () => true)
        const data = await mock()
        expect(data).toBe(true)
    });
});