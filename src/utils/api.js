import axios from 'axios'

const onResponse = (data) => {
	if (data?.status < 299) {
		return data
	} else {
		return Promise.reject(`Error: ${data}`)
	}
}
// data.statusText === 'OK' || 'Created'
// 	? data
// 	: Promise.reject(`Error: ${data}`)

//TODO Сделать собственную обработку статусов ответа сервера и переделать все исходящие запросы

class Api {
	constructor({ baseUrl }) {
		this._baseUrl = baseUrl
	}

	getAuth(email, password) {
		return axios
			.get(`${this._baseUrl}/auth?email=${email}&password=${password}`)
			.then(onResponse)
	}

	getUserInfo(id) {
		return axios
			.get(`${this._baseUrl}/auth?email=${email}&password=${password}`)
			.then(onResponse)
	}

	getShoppingCenters() {
		return axios.get(`${this._baseUrl}/shopping_centers`).then(onResponse)
	}

	register(email, password, birth, sex, lastName, firstName, phone) {
		return axios
			.post(
				`${this._baseUrl}/register?email=${email}&password=${password}&first_name=${firstName}&last_name=${lastName}&gender=${sex}&mobile=${phone}&birth_date=${birth}&is_seller=0`
			)
			.then(onResponse)
	}

	getUserByCardNumber(number) {
		return axios
			.get(`${this._baseUrl}/users?card_number=${number}`)
			.then(onResponse)
	}

	postBonusTransaction(number, bonus, mode) {
		return axios.post(
			`${this._baseUrl}/cards/update_bonuses?card_number=${number}&offset=${
				mode + bonus
			}`
		)
	}

	getAdsImages() {
		return axios.get(`${this._baseUrl}/banners`).then(onResponse)
	}

	updateProfile(id, firstName, lastName, phone) {
		return axios
			.post(
				`${this._baseUrl}/users/update_profile?id=${id}&first_name=${firstName}&last_name=${lastName}&mobile=${phone}`
			)
			.then(onResponse)
	}

	postVerifiedEmail(email, code) {
		return axios
			.post(`${this._baseUrl}/users/verify_email?email=${email}&code=${code}`)
			.then(onResponse)
	}
}

const config = {
	baseUrl: 'https://crm-tc.edvax.ru/api'
}

const api = new Api(config)

export default api