import { reactive } from 'vue'
export const store = reactive({
    menu: [
        {
            a: 'home',
            link: '#',
        },
        {
            a: 'meet the band',
            link: '#',
        },
        {
            a: 'live dates',
            link: '#',
        },
        {
            a: 'latest news',
            link: '#',
        },
        {
            a: 'albums',
            link: '#',
        },
        {
            a: 'fans',
            link: '#',
        },
    ],
    isVisible: false,
    dropdown() {
        this.isVisible = true
    },
    dropdown_cross() {
        store.isVisible = false
    }

})