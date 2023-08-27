<template>
    <template v-if="dataLoaded" class="bg-gray-100">   
        <div class="flex items-center justify-between px-6 py-1 bg-gray-200">
            <button
                @click="goToHistory"
                class="bg-gray-100 rounded-lg px-4 py-2 hover:bg-blue-300 focus:outline-none text-black"
            >
                <i class="fa fa-history text-blue-600 mr-2" aria-hidden="true"></i>
                <span class="text-sm text-blue-600">History</span>
            </button>
            <h1 class="font-extrabold tracking-widest font-mono">HOMEPAGE</h1>
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
            <div class="grid grid-cols-2 gap-3 px-2 py-2">
                <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                    <span class="text-lg mb-1 font-semibold tracking-widest text-blue-700">{{ getData[0].source.name }}</span>
                    <img 
                        :src="getData[0].urlToImage" 
                        alt="image" 
                        class="px-3 w-full max-h-60 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                        @click="goToDetail(getData[0])"
                    />
                    <div class="flex items-center justify-between mt-1">
                        <span class="text-xs text-gray-600">{{ getData[0].author }}</span>
                        <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[0].publishedAt) }}</p>
                    </div>
                    <div 
                        class="text-md font-semibold hover:text-blue-700 cursor-pointer mt-1"
                        @click="goToDetail(getData[0])"
                    >{{ getData[0].title }}</div>
                    <p class="text-justify text-sm">
                        {{  limitText(getData[0].description) }}
                        <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                              @click="goToDetail(getData[0])">
                            Detail
                        </span>
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[1].source.name }}</span>
                        <img 
                            :src="getData[1].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[1])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[1].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[1].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[1])"
                        >{{ getData[1].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[1].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[1])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[2].source.name }}</span>
                        <img 
                            :src="getData[2].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[2])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[2].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[2].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[2])"
                        >{{ getData[2].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[2].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[2])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[3].source.name }}</span>
                        <img 
                            :src="getData[3].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[3])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[3].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[3].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[3])"
                        >{{ getData[3].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[3].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[3])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[4].source.name }}</span>
                        <img 
                            :src="getData[4].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[4])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[4].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[4].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[4])"
                        >{{ getData[4].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[4].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[4])">
                                Detail
                            </span>
                        </p>
                    </div>              
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[6].source.name }}</span>
                        <img 
                            :src="getData[6].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[6])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[6].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[6].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[6])"
                        >{{ getData[6].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[6].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[6])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[7].source.name }}</span>
                        <img 
                            :src="getData[7].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[7])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[7].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[7].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[7])"
                        >{{ getData[7].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[7].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[7])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[8].source.name }}</span>
                        <img 
                            :src="getData[8].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[8])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[8].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[8].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[8])"
                        >{{ getData[8].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[8].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[8])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[10].source.name }}</span>
                        <img 
                            :src="getData[10].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[10])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[10].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[10].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[10])"
                        >{{ getData[10].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[10].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[10])">
                                Detail
                            </span>
                        </p>
                    </div>              
                </div>

                <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                    <span class="text-lg mb-1 font-semibold tracking-widest text-blue-700">{{ getData[12].source.name }}</span>
                    <img 
                        :src="getData[12].urlToImage" 
                        alt="image" 
                        class="px-3 w-full max-h-60 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                        @click="goToDetail(getData[12])"
                    />
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-600">{{ getData[12].author }}</span>
                        <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[12].publishedAt) }}</p>
                    </div>
                    <div 
                        class="text-md font-semibold hover:text-blue-700 cursor-pointer mt-1"
                        @click="goToDetail(getData[12])"
                    >{{ getData[12].title }}</div>
                    <p class="text-justify text-sm">
                        {{  limitText(getData[12].description) }}
                        <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                              @click="goToDetail(getData[12])">
                            Detail
                        </span>
                    </p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center">
            <div class="grid grid-cols-2 gap-3 px-2 py-2">
                <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                    <span class="text-lg mb-1 font-semibold tracking-widest text-blue-700">{{ getData[14].source.name }}</span>
                    <img 
                        :src="getData[14].urlToImage" 
                        alt="image" 
                        class="px-3 w-full max-h-60 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                        @click="goToDetail(getData[14])"
                    />
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-600">{{ getData[14].author }}</span>
                        <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[14].publishedAt) }}</p>
                    </div>
                    <div 
                        class="text-md font-semibold hover:text-blue-700 cursor-pointer mt-1"
                        @click="goToDetail(getData[14])"
                    >{{ getData[14].title }}</div>
                    <p class="text-justify text-sm">
                        {{  limitText(getData[14].description) }}
                        <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                              @click="goToDetail(getData[14])">
                            Detail
                        </span>
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[15].source.name }}</span>
                        <img 
                            :src="getData[15].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[15])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[15].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[15].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[15])"
                        >{{ getData[15].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[15].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[15])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[16].source.name }}</span>
                        <img 
                            :src="getData[16].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[16])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[16].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[16].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[16])"
                        >{{ getData[16].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[16].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[16])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[17].source.name }}</span>
                        <img 
                            :src="getData[17].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[17])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[17].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[17].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[17])"
                        >{{ getData[17].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[17].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[17])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[18].source.name }}</span>
                        <img 
                            :src="getData[18].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[18])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[18].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[18].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[18])"
                        >{{ getData[18].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[18].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[18])">
                                Detail
                            </span>
                        </p>
                    </div>              
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[19].source.name }}</span>
                        <img 
                            :src="getData[19].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[19])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[19].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[19].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[19])"
                        >{{ getData[19].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[19].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[19])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[20].source.name }}</span>
                        <img 
                            :src="getData[20].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[20])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[20].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[20].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[20])"
                        >{{ getData[20].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[20].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[20])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[21].source.name }}</span>
                        <img 
                            :src="getData[21].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[21])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[22].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[22].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[21])"
                        >{{ getData[21].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[21].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[21])">
                                Detail
                            </span>
                        </p>
                    </div>
                    <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                        <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[21].source.name }}</span>
                        <img 
                            :src="getData[22].urlToImage" 
                            alt="image" 
                            class="px-3 w-full max-h-20 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                            @click="goToDetail(getData[22])"
                        />
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">{{ getData[22].author }}</span>
                            <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[22].publishedAt) }}</p>
                        </div>
                        <div 
                            class="text-sm font-semibold hover:text-blue-700 cursor-pointer mt-1"
                            @click="goToDetail(getData[22])"
                        >{{ getData[22].title }}</div>
                        <p class="text-justify text-xs">
                            {{  limitTextSmall(getData[22].description) }}
                            <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                                @click="goToDetail(getData[22])">
                                Detail
                            </span>
                        </p>
                    </div>              
                </div>

                <div class="bg-white p-2 shadow-md hover:shadow-xl rounded-md">
                    <span class="text-sm mb-1 font-semibold tracking-widest text-blue-700">{{ getData[23].source.name }}</span>
                    <img 
                        :src="getData[23].urlToImage" 
                        alt="image" 
                        class="px-3 w-full max-h-60 object-cover rounded-md transition duration-300 transform hover:scale-x-105 cursor-pointer"
                        @click="goToDetail(getData[23])"
                    />
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-600">{{ getData[23].author }}</span>
                        <p class="text-xs text-gray-500">{{ formatPublishedAt(getData[23].publishedAt) }}</p>
                    </div>
                    <div 
                        class="text-md font-semibold hover:text-blue-700 cursor-pointer mt-1"
                        @click="goToDetail(getData[23])"
                    >{{ getData[23].title }}</div>
                    <p class="text-justify text-sm">
                        {{  limitText(getData[23].description) }}
                        <span class="text-blue-600 hover:text-cyan-600 cursor-pointer"
                              @click="goToDetail(getData[23])">
                            Detail
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </template>

    <template v-else>
        <Skeleton_Loading />
    </template>
</template>

<script>
import axios from 'axios'
import Skeleton_Loading from '../components/Skeleton_Loading.vue'
import moment from 'moment'

export default {
    name: 'Homepage',
    data: () => ({
        getData: "",
        dataLoaded: false,
        formFilter: {
            title: ""
        },
        apiKey: '75579dd392de4a18bc93dd2d5b661853',
        apiUrl: 'https://newsapi.org/v2/everything'
    }),
    components:{
        Skeleton_Loading
    },
    mounted(){
        this.loadData();
    },
    methods:{
        getDataApi(){
            const keyword = 'Makan';

            axios.get(this.apiUrl, {
                params: {
                    q: keyword,
                    apiKey: this.apiKey
                }
            })
            .then(res => {
                this.getData = res.data.articles;
                this.dataLoaded = true;
            })
            .catch(error => {
                console.error(error);
            });
        },

        goToDetail(item) {
            let readNews = JSON.parse(localStorage.getItem('readNews') || '[]');
            
            if (!readNews.some(news => news.url === item.url)) {
                readNews.push(item);
                localStorage.setItem('readNews', JSON.stringify(readNews));
            }

            window.open(item.url, '_blank');
        },

        limitText(text) {
            const limit = 300;
            if (text.length <= limit) {
                return text;
            } else {
                return text.slice(0, limit) + '...';
            }
        },

        limitTextSmall(text) {
            const limit = 70;
            if (text.length <= limit) {
                return text;
            } else {
                return text.slice(0, limit) + '...';
            }
        },

        formatPublishedAt(date) {
            const dateObj = moment(date);
            const formattedDate = dateObj.format(`ddd, DD MMMM hh.mm`);

            return formattedDate;
        },

        getSearch(){
            this.dataLoaded = false;
            const keyword = this.formFilter.title;

            axios.get(this.apiUrl, {
                params: {
                    q: keyword,
                    apiKey: this.apiKey
                }
            })
            .then(res => {
                this.getData = res.data.articles;
                this.dataLoaded = true;
            })
            .catch(error => {
                console.error(error);
            });
        },

        goToHistory(){
            this.$router.push('/history');
        },

        async loadData(){
            Promise.all([  
                await this.getDataApi()
            ])
            .then((results)=> {
                results
            })
        }
    },    
}
</script>