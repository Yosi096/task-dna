<template>
    <div>
        <div class="flex items-center justify-between px-6 py-1 bg-gray-200">
            <button
                @click="goToHome"
                class="bg-gray-100 rounded-lg px-4 py-2 hover:bg-blue-300 focus:outline-none text-black"
            >
                <i class="fa fa-home text-blue-600 mr-2" aria-hidden="true"></i>
                <span class="text-sm text-blue-600">Homepage</span>
            </button>
            <h1 class="font-extrabold tracking-widest font-mono">HISTORY</h1>
            <div class="rounded-lg px-4 py-2">
                <input
                    v-model="formFilter.title"
                    type="text"
                    class="border rounded-l-lg p-2 focus:outline-none px-4"
                    placeholder="Search..."
                />
                <button
                    @click="getSearch"
                    class="bg-blue-500 cursor-pointer text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 focus:outline-none"
                >
                    Cari
                </button>
            </div>
        </div>

        <div class="flex justify-center py-5" v-show="notFound">
            <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    Tidak Ada Data
                </div>
            </div>
        </div>


        <div class="flex items-center justify-center">
            <div class="grid grid-cols-3 gap-3 px-2 py-2">
                <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md"
                    v-for="(item, i) in getDataFromLocal" >
                    <img 
                        :src="item.urlToImage" 
                        alt="image" 
                        class="px-3 w-full max-h-40 object-cover rounded-md transition duration-300 transform hover:scale-x-105"
                    />
                    <div 
                        class="textl-g font-semibold mt-1"
                    >
                        {{ item.title }}
                    </div>
                    <a
                        :href="item.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-xs hover:text-blue-700 text-gray-600 cursor-pointer mt-1"
                    >
                        {{ item.url }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"History",
    data: () => ({
        formFilter: {
            title: ""
        },
        getDataFromLocal: [],
        notFound: false
    }),
    mounted(){
        this.getDataFromLocal = JSON.parse(localStorage.getItem('readNews'));
    },
    methods: {
        goToHome(){
            this.$router.push('/');
        },
        getSearch(){
            const searchTerm = this.formFilter.title.toLowerCase().trim();

            if (!searchTerm) {
                this.getDataFromLocal = JSON.parse(localStorage.getItem('readNews'));
                return;
            }

            this.getDataFromLocal = this.getDataFromLocal.filter(item =>
                item.title.toLowerCase().includes(searchTerm)
            );

            if(this.getDataFromLocal.length == 0){
                this.notFound = true
            }else{
                this.notFound = false
            }
        }
    }
}
</script>