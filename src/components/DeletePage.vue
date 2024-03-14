<template>
    <div class="max-w-md mx-auto mt-12 border p-4 bg-white shadow-md rounded-md">
        <h2 class="text-lg font-bold mb-2">Delete Player</h2>
        <p class="text-gray-600 mb-4">Are you sure you want to delete this Player?</p>
        <div class="flex justify-between">
            <button @click="confirmDelete(player.id)" class="bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600 transition duration-300">Yes</button>
            <button @click="cancelDelete()" class="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">No</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            successMessage: ''
        }
    },

    method: {
        confirmDelete(id) {
            axios.delete(`http://127.0.0.1:8000/api/player${id}`)
                .then(response => {
                    console.log(response);
                    this.successMessage = 'Player deleted successfully.';
                    this.listPlayers();
                })  
        },
        cancelDelete() {
            this.$router.push('/');
        }
    }
}
</script>