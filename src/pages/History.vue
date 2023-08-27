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
        getDataFromLocal: []
    }),
    mounted(){
        this.getDataFromLocal = JSON.parse(localStorage.getItem('readNews'));
        console.log(this.getDataFromLocal[0].author);
    },
    methods: {
        goToHome(){
            this.$router.push('/');
        },
        getSearch(){

        }
    }
}
</script>