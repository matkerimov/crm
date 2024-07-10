<script setup lang='ts'>

useSeoMeta({
    title: 'Login | CRM System'
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

</script>

<template>
    <div class='flex items-center justify-center min-h-screen w-full'>
        <div class='rounded bg-sidebar w-1/4 p-5'>
            <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
            <form>
				<Input
					placeholder="Email"
					type="email"
					class="mb-3"
					v-model="emailRef"
				/>
				
				<Input 
					placeholder="Password"
					type="password"
					class="mb-3"
					v-model='passwordRef'
				/>
				<Input
					placeholder="Name"
					type="name"
					class="mb-3"
					v-model='nameRef'
				/>
				<div class="flex items-center justify-center gap-5">
					 <Button type="button" class="hover:text-primary" <!--@click="login"-->>Login</Button> 
					<Button type="button" class="hover:text-primary" <!--@click="register"-->>Register</Button>
				</div>
			</form>
		</div>
	</div>
</template>