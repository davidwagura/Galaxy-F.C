<template>
    <div>
        <h2>Edit Player</h2>
        <form @submit.prevent="updatePlayer">
            <label for="name">Name:</label>
            <input type="text" name="name" v-model="name" required />

            <label for="age">Age:</label>
            <input type="number" name="age" v-model="age" required />

            <label for="nationality">Nationality:</label>
            <input type="text" name="nationality" v-model="nationality" required />

            <label for="position">Position:</label>
            <input type="text" name="position" v-model="name" required />

            <button type="submit">Update player</button>

        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
           name: '',
           age: '',
           nationality: '',
           position: '' 
        };
    },

    methods: {
      updatePlayer() {
        axios.post('',this.data)
        .then(response => {
            console.log(response);
        })
      }  
    }
}
</script>