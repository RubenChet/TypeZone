<template>
	<div class="flex justify-center mt-10">
		<div class="w-1/2 flex justify-between items-center">
			<div class="flex items-center space-x-2 cursor-pointer" @click='goHome()'>
				<img src="../assets/logo.png" alt="" class="w-12" />
				<h1>TypeZone</h1>
			</div>
			<div v-if="game.nickname != undefined" class="flex items-center space-x-2 cursor-pointer">
				<h1>Welcome back: {{game.nickname}}</h1>
				<i class="pi pi-user-edit"></i>
			</div>
			<div class="flex items-center space-x-4">
				<i class="pi pi-sort-amount-up cursor-pointer"></i>
				<i class="pi pi-bell cursor-pointer"></i>
				<i class="pi pi-user cursor-pointer"></i>
			</div>
		</div>
	</div>
</template>
<script>
	import { useGameStore } from "../store/game"
	export default {
		setup() {
			const game = useGameStore()
			return { game }
		},
		methods: {
			goHome() {
				this.game.socket.emit("goHome")
				this.game.roomState = false
				this.game.playerslist = []
			},
		},
	}
</script>
