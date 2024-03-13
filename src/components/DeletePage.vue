<template>
    <div>
        <h2>Delete Players</h2>
        <p>Are you sure you want to delete this Player?</p>
        <button @click="confirmDelete">Yes</button>
        <button @click="cancelDelete">No</button>
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
        confirmDelete() {
            axios.delete(`http://127.0.0.1:8000/api/member/${id}`)
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