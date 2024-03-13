<template>
    <div>
        <h2>Team Players</h2>
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
export default {
    data() {
        return {
            players: []
        };
    },
    methods: {
        editPlayer(player) {

        },
        deletePlayer(playerId) {
            
        }
    }
}
</script>