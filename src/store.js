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
    maps: [
        {
            title: '17/08/2020 gem festival 2020 anakalia, georgia',
            image: 'anaklia.jpeg',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
        },
        {
            title: '24/09/2020 groovfest dominical republic',
            image: 'repdom.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
        },
        {
            title: '31/10/2020 oasis festival 2020 marrakech, morocco',
            image: 'marrakech.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
        },
        {
            title: '07/11/2020 moga festival - essaquiria, morocco',
            image: 'essaouira.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
        },
        {
            title: '10/12/2020 enivision - uvita, costa rica',
            image: 'uvita.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
        },
    ],
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    },
    isVisible: false,
    isMapVisible: false,
    dropdown() {
        this.isVisible = !this.isVisible
    },
    viewMap(index) {
        store.isMapVisible = index
        store.maps[index].itemVisible = !store.maps[index].itemVisible
    }

})