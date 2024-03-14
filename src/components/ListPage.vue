<template>
    <div class="max-w-xl mx-auto">
        <h2 class="bg-blue-500 text-white py-2 px-4 mb-4 mt-4 text-center">Team Players</h2>
        <router-link to="/add" class="p-2 text-white bg-blue-500 border rounded  hover:underline">Add Player</router-link>
        <ul>
            <li v-for="player in players" :key="player.id" class="bg-gray-100 rounded-md shadow-md p-4 mt-7 mb-4">
                <div>
                    <strong class="text-lg">Name:</strong> <span>{{ player.name }}</span>
                </div>
                <div>
                    <strong class="text-lg">Age:</strong> <span>{{ player.age }}</span>
                </div>
                <div>
                    <strong class="text-lg">Nationality:</strong> <span>{{ player.nationality }}</span>
                </div>
                <div>
                    <strong class="text-lg">Position:</strong> <span>{{ player.position }}</span>
                </div>
                <router-link :to="'/edit/' + player.id" class="bg-blue-500 text-white py-1 px-3 rounded-md mt-2 mr-2 hover:bg-blue-600 transition duration-300">Edit</router-link>
                <button @click="deletePlayer(player.id)" class="bg-red-500 text-white py-1 px-3 rounded-md mt-2 hover:bg-red-600 transition duration-300">Delete</button>
            </li>
        </ul>
    </div>
</template>
    

<script>
import axios from 'axios';

export default {
    name: 'ListPage',

    data() {
        return {
            players: []
        };
    },

    created() {
        this.listPlayers()
    },

    methods: {
        listPlayers() {
            axios.get('http://127.0.0.1:8000/api/player')
            .then(response => {
                // console.log(response.data)
                this.players = response.data;
            })
        },
        deletePlayer() {
            this.$router.push('/delete')
            
        }
    }
}
</script>