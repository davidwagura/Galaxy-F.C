<template>
    <div class="max-w-md mx-auto">
        <h2 class="text-center text-2xl font-bold mb-4"><u>Edit Player</u></h2>
        <form @submit.prevent="updatePlayer" class="space-y-4">
        <div>
            <label for="name" class="block font-medium">Name:</label>
            <input type="text" id="name" v-model="formData.name" class="w-full pl-4 h-12 rounded-md border border-black focus:border-blue-500" required />
        </div>
        <div>
            <label for="age" class="block font-medium">Age:</label>
            <input type="number" id="age" v-model="formData.age"  class="w-full pl-4 rounded-md h-12 border border-black focus:border-blue-500" required />
        </div>
        <div>
            <label for="nationality" class="block font-medium">Nationality:</label>
            <input type="text" id="nationality" v-model="formData.nationality"  class="w-full pl-4 h-12 rounded-md border border-black focus:border-blue-500" required />
        </div>
        <div>
            <label for="position" class="block font-medium">Position:</label>
            <input type="text" id="position" v-model="formData.position"  class="w-full pl-4 rounded-md h-12 border border-black focus:border-blue-500" required />
        </div>
        <div>
            <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Update Player</button>
        </div>
        </form>
        <div v-if="successMessage" class="text-green-600 font-semibold text-center mt-4">{{ successMessage }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                name: '',
                age: '',
                nationality: '',
                position: '' 
            },
            successMessage: ''
        };
    },
    created() {

        console.log(this.$route.params)

        axios.get(`http://127.0.0.1:8000/api/player/${this.$route.params.id}/edit`)
            .then(response => {

                this.formData.name = response.data.name
                this.formData.age = response.data.age
                this.formData.position = response.data.position
                this.formData.nationality = response.data.nationality
            })
            .catch(error => {
                console.error('Error fetching player data:', error);
            });
            
    },

    methods: {
      updatePlayer() {
        axios.put(`http://127.0.0.1:8000/api/player/${this.$route.params.id}`, this.formData)
        .then(response => {
            console.log(response);
            this.successMessage = 'Player updated successfully';
            setTimeout(() =>{
                this.$router.push('/')
            }, 2000);
        })
        .catch(error => {
          console.error('Error updating player:', error);
        });
      }  
    }
};
</script>
