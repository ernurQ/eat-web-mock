export  class CompanyReviewEntity {
	id: string
	companyId: string
	user: {
		id: string
		name: string
		surname: string
		profileImage: string
	}
	rating: number
	content: string
	createdAt: Date
}