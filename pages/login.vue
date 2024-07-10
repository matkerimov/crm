<script setup lang='ts'>
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';


useSeoMeta({
	title: 'Login | CRM System'
})

// сотстояния полей
const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

// глобальные хранилища состояний данных
const isLoadingStore = useIsLoadingStore() // общий загрузчик (который будет вешать Loading на весь сайт)
const authStore = useAuthStore() // для текущей авторизации на проекте 
const router = useRouter() // для перенаправления на другую страницу при успешной регистрации

// Авторизация
const login = async () => { // функция ассинхронная чтобы ожидать ответ от сервера
	isLoadingStore.set(true) // вешаем загрузчик на весь сайт 
	await account.createEmailSession(emailRef.value, passwordRef.value) // пока грузится сайт создается сессия 
	const response = await account.get() // получаем аккаунт 
	if (response) { // записываем в authStore чтобы иметь доступ 
		authStore.set({
			email: response.email,
			name: response.name,
			status: response.status,

		})
	}
	// для обнуления полей
	emailRef.value = ''
	passwordRef.value = ''
	nameRef.value = ''

await router.push('/') // перенос на главную страницу со страницы авторизации 
isLoadingStore.set(false) // и выключам загрузчик
}


</script>

<template>
	<div class='flex items-center justify-center min-h-screen w-full'>
		<div class='rounded bg-sidebar w-1/4 p-5'>
			<h1 class="text-2xl font-bold text-center mb-5">Login</h1>
			<form>
				<Input placeholder="Email" type="email" class="mb-3" v-model="emailRef" />

				<Input placeholder="Password" type="password" class="mb-3" v-model='passwordRef' />
				<Input placeholder="Name" type="name" class="mb-3" v-model='nameRef' />
				<div class="flex items-center justify-center gap-5">
					<Button type="button" class="hover:text-primary" <!--@click="login" -->Login</Button>
					<Button type="button" class="hover:text-primary" <!--@click="register" -->Register</Button>
				</div>
			</form>
		</div>
	</div>
</template>