<template>
    <div id="" class="text-center bg-blue-500">
        <h2>Add New Player</h2>
        <form @submit.prevent="addPlayer" id="" class="bg-red-800">
            <label for="name">Name:</label>
            <input type="text" id="name" class="name" v-model="formData.name" required />

            <label for="age">Age:</label>
            <input type="number" id="number" class="age" v-model="formData.age" required />

            <label for="nationality">Nationality:</label>
            <input type="text" id="nationality" class="nationality" v-model="formData.nationality" required />

            <label for="position">Position:</label>
            <input type="text" id="position" class="position" v-model="formData.position" required />

            <button type="submit">Add player</button>

        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddPage',

    data() {
        return {
            formData:  {
                name: '',
                age: '',
                nationality: '',
                position: '' 
            },        
        };
    },

    methods: {
      addPlayer() {
        axios.get('http://127.0.0.1:8000/api/player/create',this.formData)
        .then(response => {
            console.log(response.data);

            // name = this.formData.name
            // age = this.formData.age
            // nationality = this.formData.nationality
            // position = this.formData.position

            // return response
        });
      }  
    }
}
</script>