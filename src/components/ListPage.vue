<template>
    <div>
        <h2 class="bg-blue-500 ">Team Players</h2>
        <router-link to="/add">Add Player</router-link>
        <ul>
            <li v-for="player in players" :key="player.id">
                <div>
                    <strong>Id:</strong> {{ player.id }}
                </div>
                <div>
                    <strong>Name:</strong> {{ player.name }}
                </div>
                <div>
                    <strong>Age:</strong> {{ player.age }}
                </div>
                <div>
                    <strong>Nationality:</strong> {{ player.nationality }}
                </div>
                <div>
                    <strong>Position:</strong> {{ player.position }}
                </div>
            <button @click="editPlayer(player)">Edit</button>
            <button @click="deletePlayer(player.id)">Delete</button>
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
            axios.get('http://127.0.0.1:8000/api/player/{player}')
            .then(response => {
                console.log(response.data)
                this.players = response.data;
            })
        },
        editPlayer() {
            this.$router.push('/edit')
        },
        deletePlayer() {
            this.$router.push('/delete')
            
        }
    }
}
</script>