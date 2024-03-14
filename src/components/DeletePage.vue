<template>
    <div class="max-w-md mx-auto mt-12 border p-4 bg-white shadow-md rounded-md">
        <h2 class="text-lg font-bold mb-2">Delete Player</h2>
        <p class="text-gray-600 mb-4">Are you sure you want to delete this Player?</p>
        <div class="flex justify-between">
            <button @click="confirmDelete()" class="bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600 transition duration-300">Yes</button>
            <button @click="cancelDelete()" class="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">No</button>
        </div>
    </div>
    <div v-if="successMessage" class="text-green-600 font-semibold text-center mt-4">{{ successMessage }}</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            successMessage: ''
        }
    },
    methods: {
        confirmDelete() {
            axios.delete(`http://127.0.0.1:8000/api/player/${this.$route.params.id}`)
                .then(response => {
                    console.log(response);
                    this.successMessage = 'Player deleted successfully.';
                    setTimeout(() =>{
                        this.$router.push('/')
                    }, 2000);                
                })
                .catch(error => {
                    console.error('Error deleting player:', error);
                });
        },
        cancelDelete() {
            this.$router.push('/');
        }
    }
}
</script>
