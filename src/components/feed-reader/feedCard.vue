<template name="component-name">
    <div>
        <b-row>
            <b-col cols="6" v-for="feed in feeds" :key="feed.title" class="mb-4">
                <b-card :title="feed.title" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                    <h6 class="mb-0">Feed Details</h6>
                </template>
                <b-card-text>{{feed.content}}</b-card-text>
                <b-card-text>{{feed.contentSnippest}}</b-card-text>
                <template v-slot:footer>
                    <em>
                        <a :href="feed.link">View Original</a>
                    </em>
                </template>
                </b-card>
            </b-col>
        </b-row> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            feeds: null
        }
    },

    methods: {
        async getFeeds() {
            let { data } = await this.axios.get('/.netlify/functions/feeds')

            this.feeds = data[0].items
        }
    },

    created() {
        this.getFeeds()
    }
    
}
</script>

<style>
</style>
