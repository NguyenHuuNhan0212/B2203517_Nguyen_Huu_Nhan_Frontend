<template>
    <div v-if="contact" class="page">
        <h4>Thêm liên hệ mới</h4>
        <ContactForm :contact="contact" @submit:contact="createContact"/>
        <p> {{ message }}</p>
    </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue'
import ContactService from '@/services/contact.service.js'
export default {
    components: {
        ContactForm,
    }, 
   data(){
        return {
            contact: {},
            message: ''
        }
   },
   methods: {
    async createContact(data){
        try{
            await ContactService.create(data)
           this.message = 'Liên hệ được thêm thành công.'
        }catch(error){
            console.log(error)
        }
    }
   }
}
</script>