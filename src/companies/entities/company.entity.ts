export class CompanyEntity {
	id: string
	name: string
	description: string
	profileImage: string
	headerBackground: string
	location: string
	email: string
	password: string
	contacts: CompanyContact[]
}

class CompanyContact {
	id: string
	type: 'phone' | 'whatsapp' | 'instagram'
	value: string
}
