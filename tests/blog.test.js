jest.mock('../scripts/blog.js', () => ({
	getArticle: jest.fn().mockImplementation(() => Promise.resolve('Mocked Function')),
}))

describe('Directly mock getArticle', () => {
	it('calls the mocked getArticle function without errors', async () => {
		const { getArticle } = require('../scripts/blog.js')
		const result = await getArticle()
		expect(result).toBe('Mocked Function')
	})
})
