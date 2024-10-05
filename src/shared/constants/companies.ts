import { CompanyEntity } from '@/companies/entities/company.entity'

export const sampleCompanies: CompanyEntity[] = [
	{
		id: '1',
		name: 'Coffee Boom',
		description: 'Coffeeboom — это узнаваемый и любимый многими бренд, с которым ассоциируются, прежде всего вкусная кухня, качественный сервис и приятная уютная атмосфера.',
		profileImage: 'https://coffeeboom.kz/storage/app/uploads/public/5f7/e76/7e1/5f7e767e17f3d169479667.png',
		headerBackground: '',
		location: 'mega',
		email: 'coffeeBoom@mail.ru',
		password: '1234',
		contacts: [
			{
				id: '1',
				type: 'phone',
				value: '12356547'
			},
			{
				id: '2',
				type: 'whatsapp',
				value: '877752520247'
			}
		]
	}
]