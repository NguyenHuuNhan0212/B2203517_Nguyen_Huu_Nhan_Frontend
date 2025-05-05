import createApplication from './api.service'
class ContactService {
    constructor(baseUrl = '/api/contacts'){
        this.api = createApplication(baseUrl)
    }
    async getAll(){
        return (await this.api.get('/')).data
    }
    async create(data){
        return (await this.api.post('/', data)).data
    }
    async deleteAll(){
        return (await this.api.delete('/')).data
    }
    async get(id){
        return (await this.api.get(`/${id}`)).data
    }
    async update(id, data){
        return (await this.api.put(`/${id}`, data)).data
    }
    async delete(id){
        return (await this.api.delete(`/${id}`)).data
    }
}
// data là thuộc tính mà đối tượng axios trả về cùng với response
export default new ContactService()